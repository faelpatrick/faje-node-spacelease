import Space from "../models/Space";

class spacesController {

    async index(req, res) {
        try {
            const spaces = await Space.find();
            if (!spaces) return res.status(404).json({ message: "Spaces not found." });
            return res.status(200).json(spaces);
        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }


    async create(req, res) {
        try {
            const { name, num, desc } = req.body;
            const space = await Space.findOne({ SPACE_NAME: name, SPACE_NUM: num });
            if (space) return res.status(422).json({ message: `Space ${name} already exitis.` });

            const newSpace = await Space.create({
                SPACE_NAME: name,
                SPACE_NUM: num,
                SPACE_DESC: desc
            });

            return res.status(201).json(newSpace);

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async read(req, res) {
        try {
            const { id } = req.params;
            const space = await Space.findById(id);
            if (!space) return res.status(404).json({ message: "Space not found!" });
            return res.status(200).json(space);
        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const space = await Space.findById(id);
            if (!space) return res.status(404).json({ message: "Space not found!" });

            const { name, num, desc } = req.body;
            const findSpace = await Space.findOne({
                SPACE_NAME: name,
                SPACE_NUM: num
            });
            if (findSpace) return res.status(422).json({ message: `Space ${name} already exitis.` });

            await space.updateOne({
                SPACE_NAME: name,
                SPACE_NUM: num,
                SPACE_DESC: desc
            });

            return res.status(201).json({ message: `Space updated.` });

        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const space = await Space.findById(id);
            if (!space) return res.status(404).json({ message: "Space not found!" });
            await space.deleteOne();
            return res.status(200).json({ message: "Space deleted." });
        } catch (error) {
            console.error(error);
            console.log("Internal server error.");
        }
    }
}

export default new spacesController();