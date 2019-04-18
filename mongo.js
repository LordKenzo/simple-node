const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoUri =
  'mongodb://lordkenzo-azure:SYVXdXvnrooOU0mDl3apBLx0LmV6Qs1egQm0W6wVoV3AgdGHnanCSnYZciEkKdEyyS5vCHDSXEIk4lk7138ghw==@lordkenzo-azure.documents.azure.com:10255/?ssl=true';

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri, {
    useCreateIndex: true,
    useNewUrlParser: true,
  });
}

module.exports = {
  connect,
  mongoose,
};
