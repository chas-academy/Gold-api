import C from '../controllers';

export default app => {
    app.get('/services', C.Services.index)
    app.get('/services/:id', C.Services.show)
    app.post('/services/create', C.Services.create)
    app.put('/services/update/:id', C.Services.update)
    // app.get('/users', C.Users.index)
    // app.get('/users/:id', C.Users.show)
}
