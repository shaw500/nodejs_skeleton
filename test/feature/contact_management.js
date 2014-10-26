var should = require('should');
var assert = require('chai').assert;
var request = require('supertest');

describe('Contacts Management', function() {
  var url = 'http://localhost:3000';

  before(function(done) {
    done();
  });

  it('should be able to view all contacts', function(done) {
    var expectedUsers = [{
      id: 'mjshaw',
      name: 'Matthew Shaw',
      email: 'shaw500@gmail.com'
    }, {
      id: 'taffanyl',
      name: 'Taffany Leung',
      email: 'taffanyl@gmail.com'
    }]

    request(url)
      .get('/api/contacts')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        assert.deepEqual(res.body, expectedUsers, "should show users");
        done();
      });
  });

  it('should be able to view a specific contact', function(done) {
    var expectedUser = {
      id: 'mjshaw',
      name: 'Matthew Shaw',
      email: 'shaw500@gmail.com'
    }

    request(url)
      .get('/api/contact/mjshaw')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        assert.deepEqual(res.body, expectedUser, "should show user");
        done();
      });
  });

  it('should get error when contact does not exist', function(done) {
    var expectedError = {
      error: 'Contact does not exist with id: unknown_user'
    }

    request(url)
      .get('/api/contact/unknown_user')
      .expect(404)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        assert.deepEqual(res.body, expectedError, "should show error");
        done();
      });
  });

  it('should be able to save a new contact', function(done) {
    var expectedUser = {
      id: 'mjshaw',
      name: 'Matthew Shaw',
      email: 'shaw500@gmail.com'
    }

    request(url)
      .post('/api/contact/save')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        assert.deepEqual(res.body, expectedUser, "should show user");
        done();
      });
  });

});
