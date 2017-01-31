const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');

const dummyResponse = { naturalDate: 'Nov 29, 1973', unix: 123397200 };
const dummyNull = { naturalDate: null, unix: null };

describe('Show user the correct time object', () => {
  it('gets correct response with unix parameter', (done) => {
    request(app)
      .get(`/${dummyResponse.unix}`)
      .expect(200)
      .expect((res) => expect(res.body).toEqual(dummyResponse))
      .end(done);
  });

  it('gets correct response with natural data parameter', (done) => {
    request(app)
      .get(`/${dummyResponse.naturalDate}`)
      .expect(200)
      .expect((res) => expect(res.body).toEqual(dummyResponse))
      .end(done);
  });

  it('returns null when receiving bad input', (done) => {
    request(app)
      .get('/blahblah')
      .expect(200)
      .expect((res) => expect(res.body).toEqual(dummyNull))
      .end(done);
  });
});
