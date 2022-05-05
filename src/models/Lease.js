import mongoose from "mongoose";

const leasesSchema = new mongoose.Schema({
    ID_SPACE: { type: String, required: true },
    ID_CLIENT: { type: String, required: true },
    ID_USER: { type: String, required: true, },
    DATE_INI: { type: Date, required: true },
    DATE_END: { type: Date, required: true },
    WEEK: { type: Array }
}, { timestamps: true });

export default new mongoose.model("Lease", leasesSchema);