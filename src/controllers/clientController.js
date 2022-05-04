import Client from "../models/Client";

function checkContent(content) {
    if (content != undefined) return content;
    else return "";
}

class clientsController {

    async index(req, res) {
        try {
            const clients = await Client.find();
            if (!clients) return res.status(404).json({ message: "Clients not found." });
            return res.status(200).json(clients);
        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }


    async create(req, res) {

        try {
            const client = {
                CLIENT_NAME: checkContent(req.body.name),
                CLIENT_EMAIL: checkContent(req.body.email),
                CLIENT_TEL: checkContent(req.body.tel),
                CLIENT_CEL: checkContent(req.body.cel),
                CLIENT_CPF: checkContent(req.body.cpf),
                CLIENT_CNPJ: checkContent(req.body.cnpj),
                CLIENT_RNE: checkContent(req.body.rne),
                CLIENT_ADDRESS: checkContent(req.body.address),
            };
            const findClient = await Client.findOne(client);
            if (findClient) return res.status(422).json({ message: `Client already exists.` })
            const newClient = await Client.create(client);
            return res.status(201).json(client);
        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async read(req, res) {
        try {
            const { id } = req.params;
            const user = await Client.findById(id);
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
            const findClientId = await Client.findById(id);
            if (!findClientId) return res.status(404).json({ message: "Client not found!" });

            const client = {
                CLIENT_NAME: checkContent(req.body.name),
                CLIENT_EMAIL: checkContent(req.body.email),
                CLIENT_TEL: checkContent(req.body.tel),
                CLIENT_CEL: checkContent(req.body.cel),
                CLIENT_CPF: checkContent(req.body.cpf),
                CLIENT_CNPJ: checkContent(req.body.cnpj),
                CLIENT_RNE: checkContent(req.body.rne),
                CLIENT_ADDRESS: checkContent(req.body.address),
            };

            const findClient = await Client.findOne(client);
            if (findClient) return res.status(422).json({ message: `Client already exists.` })

            const newClient = await findClientId.updateOne(client);
            return res.status(201).json({ message: `User updated.` });

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const client = await Client.findById(id);
            if (!client) return res.status(404).json({ message: "Client not found!" });
            await client.deleteOne();
            return res.status(200).json({ message: "Client deleted." });
        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }
}

export default new clientsController();