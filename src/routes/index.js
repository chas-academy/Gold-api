import C from '../controllers';

export default app => {
    //<--services routes-->
    app.get('/services', C.Services.index)
    app.get('/services/new/', C.Services.showNew)
    app.get('/services/taken/', C.Services.showTaken)
    app.get('/services/done/', C.Services.showDone)
    //<--orders routes-->
    app.get('/orders', C.Orders.index)
    app.get('/orders/:id/', C.Orders.show)
    app.post('/orders/create', C.Orders.create)
    app.put('/orders/update/:id', C.Orders.update)
    app.delete('/orders/delete/:id', C.Orders.destroy)
    //<--internal orders routes-->
    //
    //
    //
    //
    //<--complaints-->
    //
    //
    //
    //
}
