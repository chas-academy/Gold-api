'use strict'

// var Controllers = require('../src/controllers');
var Models = require('../src/models');


const expect = require('chai').expect
 


    describe('models', () => {
        it('it should export  objects', () => {
            expect(Models).to.be.a('object')
        })

        it('should return a function?', () => {
            const users = Models.user;
            expect(users).to.be.a('function')
        })

        it('should return a promise',() => {
            const findAll  = Models.user.findAll();
            expect(findAll).to.be.a('Promise')
        })
        
    })
