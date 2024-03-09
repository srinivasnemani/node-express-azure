'use strict';
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app'); // Adjust the path as necessary
const config = require('../config'); // Adjust the path as necessary

chai.use(chaiHttp);

describe('/GET homepage', () => {
    it('returns the homepage', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                if (err) return done(err); // Handle errors
                res.should.have.status(200);
                res.text.should.contain('Welcome to Contoso!');
                done();
            });
    });
});

describe('/GET who page', () => {
    it('returns the who page', (done) => {
        chai.request(server)
            .get('/who')
            .end((err, res) => {
                if (err) return done(err); // Handle errors
                res.should.have.status(200);
                res.text.should.contain('Who We Are');
                done();
            });
    });
});

describe('/GET contact page', () => {
    it('returns the contact page', (done) => {
        chai.request(server)
            .get('/contact')
            .end((err, res) => {
                if (err) return done(err); // Handle errors
                res.should.have.status(200);
                res.text.should.contain('Contact Us');
                done();
            });
    });
});
