const Meetup = require('../models/meetup');
const ReadPreference = require('mongodb').ReadPreference;

require('../mongo').connect();

function get(req, res) {
  const docquery = Meetup.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(meetups => {
      console.log(meetups);
      res.json(meetups);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, name, description, imageURL } = req.body;

  const meetup = new Meetup({ id, name, description, website, imageURL });
  meetup
    .save()
    .then(() => {
      res.json(meetup);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { id, name, description, website, imageURL, voteCount } = req.body;

  Meetup.findOne({ id })
    .then(hero => {
      meetup.name = name;
      meetup.description = description;
      meetup.website = website;
      meetup.imageURL = imageURL;
      meetup.voteCount = voteCount;
      meetup.save().then(res.json(meetup));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  Meetup.findOneAndRemove({ id })
    .then(meetup => {
      res.json(meetup);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };
