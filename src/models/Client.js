import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    CLIENT_NAME: { type: String, required: true },
    CLIENT_EMAIL: { type: String, },
    CLIENT_TEL: { type: String, },
    CLIENT_CEL: { type: String, },
    CLIENT_CNPJ: { type: String, },
    CLIENT_RNE: { type: String, },
    CLIENT_ADDRESS: { type: String, },
}, { timestamps: true });

export default new mongoose.model("Client", clientSchema);