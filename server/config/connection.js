const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/googlebooks', {
  //These sections are not needed for mongose version 6 -> it is already implied
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
  //useCreateIndex: true,
 // useFindAndModify: false,
});

module.exports = mongoose.connection;
