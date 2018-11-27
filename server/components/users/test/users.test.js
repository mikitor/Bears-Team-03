const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../../app');

const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const testDbUrl = 'mongodb://localhost/test_db';

chai.use(chaiHttp);
chai.should();

before(() => {
  mongoose.connect(
    testDbUrl,
    err => {
      if (err) {
        console.log('Error connecting to test db', err);
      }
    }
  );
});

describe(' - USERS - ', () => {
  describe('GET /users-test-route', () => {
    it('should reach the endpoint', done => {
      chai
        .request(app)
        .get('/users/users-test-route')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
