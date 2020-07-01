import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

userSchema.set('versionKey', false);

export default mongoose.model('User', userSchema);
