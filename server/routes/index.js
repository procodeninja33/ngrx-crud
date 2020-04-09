/* Import routes */
// const express = require('express');
// const app = express();

const employeeRoute = require('../modules/employee/employeeRoute');

module.exports = function (app) {

    /** User Routes */
    app.use('/api/employee', [employeeRoute])
}
