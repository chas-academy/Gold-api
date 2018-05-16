'use strict'


var UserController = require('../src/controllers/Users');

const expect = require('chai').expect
 


    describe('UserController', () => {
        it('it should export  objects', () => {
            expect(UserController).to.be.a('object')
        })

        it('it should return a function,',() => {
            const all = UserController.all()
            expect(all).to.throw(error)
        })
    })