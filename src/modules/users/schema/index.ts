import mongoose from 'mongoose';
const { Schema } = mongoose;

/**
 * User Schema
 */
const userSchema = new Schema({
  email: String,
  name: String,
}, {
  timestamps: true
});

export const userModel = mongoose.model('user', userSchema);