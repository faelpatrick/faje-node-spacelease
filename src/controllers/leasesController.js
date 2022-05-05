import Lease from "../models/Lease";
import Space from "../models/Space";
import Client from "../models/Client";
import User from "../models/User";

function checkContent(content) {
    if (content != undefined) return content;
    else return "";
}

class leasesController {

    async index(req, res) {
        try {
            const leases = await Lease.find();
            if (!leases) return res.status(404).json({ message: "Leases not found." });
            return res.status(200).json(leases);
        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }


    async create(req, res) {
        try {

            const lease = {
                ID_SPACE: checkContent(req.body.id_space),
                ID_CLIENT: checkContent(req.body.id_client),
                ID_USER: checkContent(req.body.id_user),
                DATE_INI: checkContent(req.body.date_ini),
                DATE_END: checkContent(req.body.date_end),
                WEEK: checkContent(req.body.week),
            }

            if (lease.ID_SPACE == "" || lease.ID_CLIENT == "" || lease.ID_USER == "") {
                return res.status(404).json({ message: `The ID's can't be empty.` });
            }

            const findSpace = await Space.findById(lease.ID_SPACE);
            if (!findSpace) return res.status(404).json({ message: `Space not found.` })

            const findClient = await Client.findById(lease.ID_CLIENT);
            if (!findClient) return res.status(404).json({ message: `Client not found.` })

            const findUser = await User.findById(lease.ID_USER);
            if (!findUser) return res.status(404).json({ message: `User not found.` })

            //verificar data e hora inicial
            //verificar data e hora final
            //se disponivel criar agendamento.

            // const findLease = await Lease.findOne({  });
            // if (findLease) return res.status(422).json({ message: `Lease already exitis.` });
            // const newLease = await Lease.create(newLease);
            return res.status(201).json(lease);
        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async read(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            if (!user) return res.status(404).json({ message: "User not found!" });
            return res.status(200).json(user);
        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const user = await User.findById(id);
            if (!user) return res.status(404).json({ message: "User not found!" });
            const newUser = await User.findOne({ USER_EMAIL: email });
            if (newUser) return res.status(422).json({ message: `User ${email} already exitis.` });
            const encryptedPass = await createPasswordHash(password);
            await user.updateOne({ USER_NAME: name, USER_EMAIL: email, USER_PASS: encryptedPass });
            return res.status(201).json({ message: `User updated.` });
        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            if (!user) return res.status(404).json({ message: "User not found!" });
            await user.deleteOne();
            return res.status(200).json({ message: "User deleted." });
        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }
}

export default new leasesController();