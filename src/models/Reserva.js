import mongoose from "mongoose";

const reservSchema = new mongoose.Schema({
    ID_RESERV: { type: String, required: true, index: { unique: true } },
    ID_SPACE: { type: String, required: true },
    ID_CLIENT: { type: String, required: true },
    ID_USER: { type: String, required: true, unique: true },
    DATE_INI: { type: timestamps, required: true },
    DATE_END: { type: timestamps, required: true },
}, { timestamps: true });

export default new mongoose.model("Reserv", reservSchema);