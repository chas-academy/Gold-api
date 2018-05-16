'use strict'

// var Controllers = require('../src/controllers');
var UserController = require('../src/controllers/Users');


const expect = require('chai').expect
 


    describe('UserController', () => {
        it('it should export  objects', () => {
            expect(UserController).to.be.a('object')
        })

        it('it should return a promise,',() => {
            const all = UserController.all()
            expect(all).to.be.a('Promise')
        })
    })