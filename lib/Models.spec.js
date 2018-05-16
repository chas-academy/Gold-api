'use strict'

//expect models to return objects

var Models = require('../src/models');


const expect = require('chai').expect



    describe('Models', () => {
        it('it should export a objects', () => {
            expect(Models).to.be.a('object')
        })
    })
