import mongoose from "mongoose";

const landSchema = mongoose.Schema(
  {
    location: { type: String, required: true, trim: true },
size: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
  },
  { timestamps: true }
);

const Land = mongoose.model("Land", landSchema);

export default Land; // ✅ default export
