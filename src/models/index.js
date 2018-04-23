import Sequelize from 'sequelize';
const sequelize = require('../config/dbconn')

const models = {
    User: sequelize.default.import('./User.js'),
    Customer: sequelize.default.import('./Customer.js'),
    Service: sequelize.default.import('./Service.js'),
    Order: sequelize.default.import('./Order.js'),
    Complaint: sequelize.default.import('./Complaint.js'),
    EmployeeService: sequelize.default.import('./EmployeeService.js')
};
Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize.default;
models.Sequelize = Sequelize;

export default models;