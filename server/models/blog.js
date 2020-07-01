import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  url: String,
  img: String,
  name: String,
  date: Date,
  text: String,
});

blogSchema.set('versionKey', false);

export default mongoose.model('Blog', blogSchema);
