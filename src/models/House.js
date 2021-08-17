import { Schema, model } from 'mongoose';

const HouseSchema = new Schema({
  thumbnail: String,
  description: String,
  price: Number,
  location: String,
  status: Boolean,
  user: {
    type: Schema.types.ObjectId,
    ref: 'User'
  }
});

export default model('House', HouseSchema);