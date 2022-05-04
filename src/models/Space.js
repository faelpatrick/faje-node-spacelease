import mongoose from "mongoose";

const spaceSchema = new mongoose.Schema({
    SPACE_NAME: { type: String, required: true },
    SPACE_NUM: { type: String, },
    SPACE_DESC: { type: String, },
    // SPACE_STATUS: { type: String, required: true },
},
    { timestamps: true }
);

export default new mongoose.model("Space", spaceSchema);