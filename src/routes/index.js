import C from '../controllers';

export default app => {
    app.get('/services', C.Services.index)
    app.get('/services/:id', C.Services.show)
    app.get('/users', C.Users.index)
    app.get('/users/:id', C.Users.show)
}
