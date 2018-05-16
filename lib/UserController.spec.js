'use strict'


var UserController = require('../src/controllers/Users');

const expect = require('chai').expect
 


    describe('UserController', () => {
        it('it should export  objects', () => {
            expect(UserController).to.be.a('object')
        })

        it('it should return a function,',() => {
            const findAll = UserController.findAll();

            expect(findAll).to.throw(Error)
        })
    })