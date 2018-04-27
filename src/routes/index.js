import C from '../controllers';

export default app => {
    // app.get('/services', C.Services.index)
    // app.get('/services/:id', C.Services.show)

    app.get('/users', C.Users.index)
    app.get('/users/:id', C.Users.show)
    app.post('/usersA/', C.Users.createAdmin)
    app.post('/usersE/', C.Users.createEmployee)
    app.post('/usersC/', C.Users.createCustomer)
    app.put('/users/:id', C.Users.update)
    app.delete('/users/:id', C.Users.destroy)
}
