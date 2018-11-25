/* eslint-disable no-console */
const http = require('http');

const configVars = require('./config/keys');
const app = require('./app');

const mongoose = require('mongoose');
// Setting few options to remove warning on feature deprecations
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndexes', false);
mongoose.set('useFindAndModify', false);

const port = configVars.PORT;

mongoose.connect(
  configVars.MONGO_URI,
  err =>
    err ? console.log('Error on connecting to the db', err) : console.log('Mongo db is connected!')
);

http.createServer(app).listen(port, () => console.log(`Server listening on port ${port}`));
