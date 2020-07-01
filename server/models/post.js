import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  url: String,
  img: String,
  name: String,
  date: Date,
  text: String,
});

postSchema.set('versionKey', false);

export default mongoose.model('Post', postSchema);
