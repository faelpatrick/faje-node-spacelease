import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    USER_NAME: { type: String, required: true },
    USER_EMAIL: { type: String, required: true, index: { unique: true }},
    USER_PASS: { type: String, required: true },
}, { timestamps: true });

export default new mongoose.model("User", userSchema);