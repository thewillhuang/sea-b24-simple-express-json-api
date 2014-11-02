var chai = require('chai');
var chaihttp = require('chai-http');
var moment = require('moment');
var server = 'http://localhost:' + (process.env.PORT || 3000);
var expect = chai.expect;
var assert = chai.assert;

chai.use(chaihttp);

describe('Simple JSON API', function() {
  it('should send the local time', function(done) {
    var time = moment().format('YYYY-MM-DD HH:mm');
    chai.request(server)
      .get('/api/time')
      .end(function(err, res) {
        assert.equal(err, null);
        expect(res).to.be.a('object', 'not an object');
        expect(res).to.have.status(200, 'status code not 200');
        expect(res.body).to.have.property('time');
        expect(res.body.time).to.have.string(time,'wrong time');
        done();
      });
  });

  it('should greet someone', function(done) {
    var random = Math.random();
    chai.request(server)
      .get('/api/hello/'+random)
      .end(function(err, res) {
        assert.equal(err, null);
        expect(res).to.be.a('object', 'not an object');
        expect(res).to.have.status(200, 'status code not 200');
        expect(res.body).to.have.property('msg');
        expect(res.body.msg).equals('hello '+random+'!','wrong name');
        done();
      });
  });
});
