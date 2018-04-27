import C from '../controllers';

export default app => {
    app.get('/users', C.Services.index)
}
