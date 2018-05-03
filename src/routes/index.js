import C from '../controllers';

export default app => {

    app.post('/register', C.Auth.register)
    app.post('/login', C.Auth.login)

    app.get('/users', C.Users.all)
    app.get('/users/:id', C.Users.find)
    app.post('/usersCreateA/', C.Users.createAdmin)
    app.post('/usersCreateE/', C.Users.createEmployee)
    app.post('/usersCreateC/', C.Users.createCustomer)
    app.put('/usersUpdate/:id', C.Users.update)
    app.put('/customersUpdate/:id', C.Users.updateCustomer)
    app.delete('/usersDelete/:id', C.Users.destroy)
}
