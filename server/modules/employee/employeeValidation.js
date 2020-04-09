const Joi = require('@hapi/joi');
const employeeConstant = require('./employeeConstant');
const responseHandler = require('../../utils/responseHandler');


async function createValidation(req, res, next) {
    try {

        // create schema request parameters
        const schema = Joi.object({
            emp_firstname: Joi.string().alphanum().min(2).max(32).required().label('First name'),
            emp_lastname: Joi.string().alphanum().min(2).max(32).required().label('Last name'),
            emp_mobile: Joi.string().min(8).max(10).required().pattern(/^[0-9]*$/)
                .messages({ 'string.pattern.base': 'Phone number is not valid.' }).label('Mobile number'),
            emp_email: Joi.string().pattern(/^[A-Za-z\d\.\_\-\+]{2,64}\@([A-Za-z\d\-\_]{1,256})\.[A-Za-z\d]+(.[A-Za-z\d]+)?$/).required()
                .messages({ 'string.pattern.base': 'Email is not valid.' })
        })
        
        await schema.validateAsync(req.body, { allowUnknown: true })
        next();
    }
    catch (err) {

        let error = {
            status: employeeConstant.CODE.badrequest,
            message:  err.details ? err.details[0].message : 'There is some issue in validation.',
            data: {}
        }
        responseHandler.errorHandler(res, error);
    }

}
module.exports = {
    createValidation
}