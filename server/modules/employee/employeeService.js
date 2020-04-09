const employeeConstant = require('./employeeConstant');
const mongoose = require('mongoose');
const employeeModel = require('./employeeModel');

function create(req) {

    return employeeModel.create(req.body).then((result) => {
        return result
    }).catch((err) => {
        return 1;
    });
}

function getAll(req) {

    let findAllQuery = {
        emp_isDelete: false
    }

    return employeeModel.find(findAllQuery).then((result) => {
        return { employees: result }
    }).catch((err) => {
        return 1;
    });
}

function getById(req) {

    let findAllQuery = {
        emp_isDelete: false,
        _id: mongoose.Types.ObjectId(req.params.id)
    }

    return employeeModel.findOne(findAllQuery).then((result) => {
        if (result && result != null) {
            return {
                employees: result
            }
        } else {
            return 2;
        }
    }).catch((err) => {
        return 1;
    });
}

function editById(req) {

    let findAllQuery = {
        emp_isDelete: false,
        _id: mongoose.Types.ObjectId(req.params.id)
    }

    return employeeModel.findOne(findAllQuery).then((result) => {
        if (result && result != null) {
            let update = {
                $set: req.body
            }
            return employeeModel.findOneAndUpdate(findAllQuery, update).then((updateResult) => updateResult)
                .catch((err) => 1);

        } else {
            return 2;
        }
    }).catch((err) => {
        return 1;
    });
}

function deleteById(req) {

    let findAllQuery = {
        emp_isDelete: false,
        _id: mongoose.Types.ObjectId(req.params.id)
    }

    return employeeModel.findOne(findAllQuery).then((result) => {
        if (result && result != null) {
            let update = {
                $set: {
                    emp_isDelete: true
                }
            }
            return employeeModel.findOneAndUpdate(findAllQuery, update).then((updateResult) => updateResult)
                .catch((err) => 1);

        } else {
            return 2;
        }
    }).catch((err) => {
        return 1;
    });
}


module.exports = {
    create,
    getAll,
    getById,
    editById,
    deleteById
}