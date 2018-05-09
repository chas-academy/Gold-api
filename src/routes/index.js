import C from '../controllers';

export default app => {

    //<--auth routes-->
    app.post('/register', C.Auth.register)
    app.post('/login', C.Auth.login)

    //<--users routes-->
    app.get('/users', C.Auth.loginRequired, C.Users.all)
    app.get('/users/:id', C.Auth.loginRequired, C.Users.find)
    app.post('/users/create/admin', C.Auth.loginRequired, C.Users.createAdmin)
    app.post('/users/create/employee', C.Auth.loginRequired, C.Users.createEmployee)
    app.post('/users/create/customer', C.Auth.loginRequired, C.Users.createCustomer)
    app.put('/users/update/:id', C.Auth.loginRequired, C.Users.update)
    app.put('/customers/update/:id', C.Auth.loginRequired, C.Users.updateCustomer)
    app.delete('/users/delete/:id', C.Auth.loginRequired, C.Users.destroy)

    //<--services routes-->
    app.get('/services', C.Auth.loginRequired, C.Services.index)
    app.get('/services/new', C.Auth.loginRequired, C.Services.showNew)
    app.get('/services/taken', C.Auth.loginRequired, C.Services.showTaken)
    app.get('/services/done', C.Auth.loginRequired, C.Services.showDone)

    //<--orders routes-->
    app.get('/orders', C.Orders.index)
    app.get('/orders/:id', C.Auth.loginRequired, C.Orders.show)
    app.post('/orders/create', C.Orders.create)
    app.put('/orders/update/:id', C.Orders.update)
    app.delete('/orders/delete/:id', C.Auth.loginRequired, C.Orders.destroy)

    //<--internal orders routes-->
    app.get('/int_orders', C.IntOrders.index)
    app.get('/int_orders/:id', C.IntOrders.show)
    app.post('/int_orders/create', C.IntOrders.create)
    app.put('/int_orders/update/:id', C.IntOrders.update)
    app.delete('/int_orders/delete/:id', C.IntOrders.destroy)

    //<--complaints-->
    app.get('/complaints', C.Complaints.index)
    app.get('/complaints/:id', C.Complaints.show)
    app.post('/complaints/create', C.Complaints.create)
    app.put('/complaints/update/:id', C.Complaints.update)
    app.delete('/complaints/delete/:id', C.Complaints.destroy)

}
