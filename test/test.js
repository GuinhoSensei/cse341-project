const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); // Ensure server is exported from server.js
const should = chai.should();

chai.use(chaiHttp);

describe('GET Endpoints', () => {
  it('should GET all the projects', (done) => {
    chai.request(server)
      .get('/api/projects')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should GET a single project by ID', (done) => {
    const projectId = 'someId';
    chai.request(server)
      .get(`/api/projects/${projectId}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  it('should GET all the comments', (done) => {
    chai.request(server)
      .get('/api/comments')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('should GET a single comment by ID', (done) => {
    const commentId = 'someId';
    chai.request(server)
      .get(`/api/comments/${commentId}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
