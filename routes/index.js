const express = require('express');
const router = express.Router();

const meetupService = require('../services/meetup.service');

router.get('/meetups', (req, res) => {
  meetupService.get(req, res);
});

router.put('/meetup', (req, res) => {
  meetupService.create(req, res);
});

router.post('/meetup', (req, res) => {
  meetupService.update(req, res);
});

router.delete('/meetup/:id', (req, res) => {
  meetupService.destroy(req, res);
});

module.exports = router;
