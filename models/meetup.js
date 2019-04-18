const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const meetupSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: String,
  description: String,
  website: String,
  imageURL: String,
  countVote: { type: Number, default: 0 },
});

const Meetup = mongoose.model('Meetup', meetupSchema);
module.exports = Meetup;
