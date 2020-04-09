const employeeConstant = require('./employeeConstant');

function createSuccessMapper() {
    return {
        status: employeeConstant.CODE.ok,
        message: employeeConstant.MESSAGE.createSuccess,
        data: {}
    }
}

function createErrorMapper() {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.createError,
        data: {}
    }
}

function getAllSuccessMapper(result) {
    return {
        status: employeeConstant.CODE.ok,
        message: employeeConstant.MESSAGE.getAllSuccess,
        data: result
    }
}

function getAllErrorMapper() {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.getAllError,
        data: {}
    }
}

function getByIdSuccessMapper(result) {
    return {
        status: employeeConstant.CODE.ok,
        message: employeeConstant.MESSAGE.getByIdSuccess,
        data: result
    }
}

function getByIdErrorMapper() {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.getByIdError,
        data: {}
    }
}

function employeeNotFoundError() {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.employeeNotFound,
        data: {}
    }
}

function editByIdSuccessMapper() {
    return {
        status: employeeConstant.CODE.ok,
        message: employeeConstant.MESSAGE.editByIdSuccess,
        data: {}
    }
}

function editByIdErrorMapper() {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.editByIdError,
        data: {}
    }
}

function deleteByIdSuccessMapper() {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.deleteByIdSuccess,
        data: {}
    }
}

function deleteByIdErrorMapper() {
    return {
        status: employeeConstant.CODE.ok,
        message: employeeConstant.MESSAGE.deleteByIdError,
        data: {}
    }
}

module.exports = {
    createSuccessMapper,
    createErrorMapper,
    getAllSuccessMapper,
    getAllErrorMapper,
    getByIdSuccessMapper,
    getByIdErrorMapper,
    employeeNotFoundError,
    editByIdErrorMapper,
    editByIdSuccessMapper,
    deleteByIdSuccessMapper,
    deleteByIdErrorMapper
}