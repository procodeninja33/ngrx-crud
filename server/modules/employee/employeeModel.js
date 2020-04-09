var mongoose = require("mongoose");
var constants = require('../../utils/constant');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    emp_isDelete: {
        type: Boolean,
        default: false
    },
    emp_firstname: String,
    emp_lastname: String,
    emp_email: String,
    emp_mobile: String,
    emp_password: String,
}, {
    timestamps: true
})

module.exports = mongoose.model(constants.DB_MODEL_REF.EMPLOYESS, employeeSchema)