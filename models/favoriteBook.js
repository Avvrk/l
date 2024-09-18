import mongoose from 'mongoose';

const favoriteBookSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: String, required: true },
  coverImage: { type: String },
});

export default mongoose.model('FavoriteBook', favoriteBookSchema)
