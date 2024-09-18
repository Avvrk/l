import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  biography: { type: String },
  readingLevel: { type: Number, default: 1 },
  booksRead: { type: Number, default: 0 },
  favoriteBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FavoriteBook' }],
  personalLibrary: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PersonalLibrary' }],
  photo: { type: String },
});

export default mongoose.model('User', userSchema);
