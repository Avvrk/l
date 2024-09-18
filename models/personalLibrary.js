import mongoose from "mongoose";

const personalLibrarySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: String, required: true },
  coverImage: { type: String },
  status: { type: String, enum: ['Leído', 'Leyendo', 'Pendiente'], default: 'Pendiente' },
  rating: { type: Number, min: 0, max: 5 },
  notes: { type: String },
});

export default mongoose.model('PersonalLibrary', personalLibrarySchema);
