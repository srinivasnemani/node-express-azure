'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');
const config = require('../config');

chai.use(chaiHttp);

describe('/GET who page', () => {
    it('returns the who page', (done) => {
        chai.request(server)
            .get('/who')
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.text.should.contain('Who We Are');
                done();
            });
    });
});
