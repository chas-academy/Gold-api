import C from '../controllers';

export default app => {

    //<--auth routes-->
    app.post('/register', C.Auth.register)
    app.post('/login', C.Auth.login)

    //<--users routes-->
    app.get('/users', C.Auth.loginRequired, C.Users.all) // all users
    app.get('/users/:id', C.Auth.loginRequired, C.Users.findUser) // find employee / admin by ID
    app.get('/employees', C.Auth.loginRequired, C.Users.allEmployees) // find all employees
    app.get('/customers', C.Auth.loginRequired, C.Users.allCustomers) // find all customers
    app.get('/customers/privates', C.Auth.loginRequired, C.Users.allPrivates) // find all private customers
    app.get('/customers/companies', C.Auth.loginRequired, C.Users.allCompanies) // find all company customers
    app.get('/customers/:id', C.Auth.loginRequired, C.Users.findCustomer) // find cusomer by ID
    app.post('/users/create/admin', C.Auth.loginRequired, C.Users.createAdmin)
    app.post('/users/create/employee', C.Auth.loginRequired, C.Users.createEmployee)
    app.post('/users/create/customer', C.Auth.loginRequired, C.Users.createCustomer)
    app.put('/users/update/:id', C.Auth.loginRequired, C.Users.update)
    app.put('/customers/update/:id', C.Auth.loginRequired, C.Users.updateCustomer)
    app.delete('/users/delete/:id', C.Auth.loginRequired, C.Users.destroy)

    //<--users specific rroutes on status-->
    app.get('/users/:id/new' ,C.Users.findNew)
    app.get('/users/:id/assigned' ,C.Users.findAssigned)
    app.get('/users/:id/taken' ,C.Users.findTaken)
    app.get('/users/:id/done' ,C.Users.findDone)

    //<--services routes-->
    app.get('/services', C.Auth.loginRequired, C.Services.index)
    app.get('/services/new', C.Auth.loginRequired, C.Services.showNew)
    app.get('/services/assigned', C.Auth.loginRequired, C.Services.showAssigned)
    app.get('/services/taken', C.Auth.loginRequired, C.Services.showTaken)
    app.get('/services/done', C.Auth.loginRequired, C.Services.showDone)

    //<--orders routes-->
    app.get('/orders', C.Auth.loginRequired, C.Orders.index)
    app.get('/orders/:id', C.Auth.loginRequired, C.Orders.show)
    app.post('/orders/create', C.Auth.loginRequired, C.Orders.create)
    app.put('/orders/update/:id', C.Auth.loginRequired, C.Orders.update)
    app.delete('/orders/delete/:id', C.Auth.loginRequired, C.Orders.destroy)

    //<--internal orders routes-->
    app.get('/int_orders', C.Auth.loginRequired, C.IntOrders.index)
    app.get('/int_orders/:id', C.Auth.loginRequired, C.IntOrders.show)
    app.post('/int_orders/create', C.Auth.loginRequired, C.IntOrders.create)
    app.put('/int_orders/update/:id', C.Auth.loginRequired, C.IntOrders.update)
    app.delete('/int_orders/delete/:id', C.Auth.loginRequired, C.IntOrders.destroy)

    //<--complaints-->
    app.get('/complaints', C.Auth.loginRequired, C.Complaints.index)
    app.get('/complaints/:id', C.Auth.loginRequired, C.Complaints.show)
    app.post('/complaints/create', C.Auth.loginRequired, C.Complaints.create)
    app.put('/complaints/update/:id', C.Auth.loginRequired, C.Complaints.update)
    app.delete('/complaints/delete/:id', C.Auth.loginRequired, C.Complaints.destroy)

}
