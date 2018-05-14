import C from '../controllers';

export default app => {

    //<--auth routes-->
    app.post('/register', C.Auth.register)
    app.post('/login', C.Auth.login)

    //<--users routes-->
    app.get('/users/:id', C.Auth.loginRequired, C.Users.findUser) // find employee / admin by ID
    app.get('/users', C.Auth.loginRequired, C.Users.all) // all users
    app.get('/admins', C.Auth.loginRequired, C.Users.allAdmins) // find all admins
    app.get('/employees', C.Auth.loginRequired, C.Users.allEmployees) // find all employees
    app.get('/customers/privates', C.Auth.loginRequired, C.Users.allPrivates) // find all private customers
    app.get('/customers/companies', C.Auth.loginRequired, C.Users.allCompanies) // find all company customers
    app.get('/customers/:id', C.Auth.loginRequired, C.Users.findCustomer) // find cusomer by ID
    app.get('/customers', C.Auth.loginRequired, C.Users.allCustomers) // find all customers
    app.post('/users/create/admin', C.Auth.loginRequired, C.Users.createAdmin)
    app.post('/users/create/employee', C.Auth.loginRequired, C.Users.createEmployee)
    app.post('/users/create/customer', C.Auth.loginRequired, C.Users.createCustomer)
    app.put('/users/update/:id', C.Auth.loginRequired, C.Users.update)
    app.put('/customers/update/:id', C.Auth.loginRequired, C.Users.updateCustomer)
    app.delete('/users/delete/:id', C.Auth.loginRequired, C.Users.destroy)

    //<--users specific rroutes on status-->
    app.get('/users/:id/new',C.Users.findNew)
    app.get('/users/:id/assigned',C.Users.findAssigned)
    app.get('/users/:id/taken',C.Users.findTaken)
    app.get('/users/:id/done',C.Users.findDone)

    //<--services routes-->
    app.get('/customer/:id/services', C.Auth.loginRequired, C.Services.findByCustomer)
    app.get('/services/new', C.Auth.loginRequired, C.Services.showNew)
    app.get('/services/assigned', C.Auth.loginRequired, C.Services.showAssigned)
    app.get('/services/taken', C.Auth.loginRequired, C.Services.showTaken)
    app.get('/services/done', C.Auth.loginRequired, C.Services.showDone)
    app.get('/services', C.Auth.loginRequired, C.Services.index)

    //<--orders routes-->
    app.get('/orders/assigned', C.Auth.loginRequired, C.Orders.findAssigned)
    app.get('/orders/taken', C.Auth.loginRequired, C.Orders.findTaken)
    app.get('/orders/done', C.Auth.loginRequired, C.Orders.findDone)
    app.get('/orders/:id', C.Auth.loginRequired, C.Orders.show)
    app.get('/orders', C.Auth.loginRequired, C.Orders.index)
    app.post('/orders/create', C.Auth.loginRequired, C.Orders.create)
    app.put('/orders/update/:id', C.Auth.loginRequired, C.Orders.update)
    app.delete('/orders/delete/:id', C.Auth.loginRequired, C.Orders.destroy)


    //<--internal orders routes-->
    app.get('/int_orders/assigned', C.Auth.loginRequired, C.IntOrders.findAssigned)
    app.get('/int_orders/taken', C.Auth.loginRequired, C.IntOrders.findTaken)
    app.get('/int_orders/done', C.Auth.loginRequired, C.IntOrders.findDone)
    app.get('/int_orders/:id', C.Auth.loginRequired, C.IntOrders.show)
    app.get('/int_orders', C.Auth.loginRequired, C.IntOrders.index)
    app.post('/int_orders/create', C.Auth.loginRequired, C.IntOrders.create)
    app.put('/int_orders/update/:id', C.Auth.loginRequired, C.IntOrders.update)
    app.delete('/int_orders/delete/:id', C.Auth.loginRequired, C.IntOrders.destroy)

    //<--complaints-->
    app.get('/complaints/assigned', C.Auth.loginRequired, C.Complaints.findAssigned)
    app.get('/complaints/taken', C.Auth.loginRequired, C.Complaints.findTaken)
    app.get('/complaints/done', C.Auth.loginRequired, C.Complaints.findDone)
    app.get('/complaints/:id', C.Auth.loginRequired, C.Complaints.show)
    app.get('/complaints', C.Auth.loginRequired, C.Complaints.index)
    app.post('/complaints/create', C.Auth.loginRequired, C.Complaints.create)
    app.put('/complaints/update/:id', C.Auth.loginRequired, C.Complaints.update)
    app.delete('/complaints/delete/:id', C.Auth.loginRequired, C.Complaints.destroy)

}
