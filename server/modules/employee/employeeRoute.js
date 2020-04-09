const employeeRoute = require('express').Router();
const responseHandler = require('../../utils/responseHandler');
const employeeFacade = require('./employeeFacade');


/**  Frontend : Create new employee */
employeeRoute.route('/create').post([], (req, res) => {
    employeeFacade.create(req).then(result => {
        responseHandler.successResponse(res, result);
    }).catch(err => {
        responseHandler.errorHandler(res, err);
    });
})

/**  Frontend : get all employee detial */
employeeRoute.route('/getAll').get([], (req, res) => {
    employeeFacade.getAll(req).then(result => {
        responseHandler.successResponse(res, result);
    }).catch(err => {
        responseHandler.errorHandler(res, err);
    });
})

/**  Frontend : get employee by id */
employeeRoute.route('/getById/:id').get([], (req, res) => {
    employeeFacade.getById(req).then(result => {
        responseHandler.successResponse(res, result);
    }).catch(err => {
        responseHandler.errorHandler(res, err);
    });
})

/**  Frontend : get employee by id */
employeeRoute.route('/editById/:id').post([], (req, res) => {
    employeeFacade.editById(req).then(result => {
        responseHandler.successResponse(res, result);
    }).catch(err => {
        responseHandler.errorHandler(res, err);
    });
})

/**  Frontend : delete employee by id */
employeeRoute.route('/deleteById/:id').delete([], (req, res) => {
    employeeFacade.deleteById(req).then(result => {
        responseHandler.successResponse(res, result);
    }).catch(err => {
        responseHandler.errorHandler(res, err);
    });
})


module.exports = employeeRoute;
