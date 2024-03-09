'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');
const config = require('../config');

chai.use(chaiHttp);

describe('/GET homepage', () => {
    it('returns the homepage', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                if (err) return done(err);
                res.should.have.status(200);
                res.text.should.contain('Welcome to Contoso!');
                done();
            });
    });
});
