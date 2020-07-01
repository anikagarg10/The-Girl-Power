import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const leadSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
  jobTitle: String,
  company: String,
  country: String
});

leadSchema.set('versionKey', false);

export default mongoose.model('Lead', leadSchema);
