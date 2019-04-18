const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const dbName = 'meetupsDB';
const mongoUri = process.env.CONNECTION_STRING || `mongodb://127.0.0.1:27017/${dbName}`;

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri, {
    useMongoClient: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
}

module.exports = {
  connect,
  mongoose,
};
