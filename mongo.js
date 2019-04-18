const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const dbName = 'meetupsDB';
const mongoUri = `mongodb://lordkenzo-azure:SYVXdXvnrooOU0mDl3apBLx0LmV6Qs1egQm0W6wVoV3AgdGHnanCSnYZciEkKdEyyS5vCHDSXEIk4lk7138ghw==@lordkenzo-azure.documents.azure.com:10255/${dbName}?ssl=true`;
//process.env.CONNECTION_STRING || 'mongodb://127.0.0.1:27017';

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(`${mongoUri}/${dbName}`, {
    useMongoClient: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  });
}

module.exports = {
  connect,
  mongoose,
};
