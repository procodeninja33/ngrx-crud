const employeeService = require('./employeeService');
const employeeMapper = require('./employeeMapper');

function create(req) {
    return employeeService.create(req).then((data) => {
        if (data === 1) {
            return employeeMapper.createErrorMapper()
        } else if (data) {
            return employeeMapper.createSuccessMapper();
        } else {
            return employeeMapper.createErrorMapper()
        }
    }, (err) => {
        return employeeMapper.createErrorMapper()
    })
}

function getAll(req) {
    return employeeService.getAll(req).then((data) => {
        if (data === 1) {
            return employeeMapper.getAllErrorMapper()
        } else if (data) {
            return employeeMapper.getAllSuccessMapper(data);
        } else {
            return employeeMapper.getAllErrorMapper()
        }
    }, (err) => {
        return employeeMapper.getAllErrorMapper()
    })
}

function getById(req) {
    return employeeService.getById(req).then((data) => {
        if (data === 1) {
            return employeeMapper.getByIdErrorMapper()
        } else if (data === 2) {
            return employeeMapper.employeeNotFoundError();
        } else if (data) {
            return employeeMapper.getByIdSuccessMapper(data);
        } else {
            return employeeMapper.getByIdErrorMapper()
        }
    }, (err) => {
        return employeeMapper.getByIdErrorMapper()
    })
}

function editById(req) {
    return employeeService.editById(req).then((data) => {
        if (data === 1) {
            return employeeMapper.editByIdErrorMapper()
        } else if (data === 2) {
            return employeeMapper.employeeNotFoundError();
        } else if (data) {
            return employeeMapper.editByIdSuccessMapper(data);
        } else {
            return employeeMapper.editByIdErrorMapper()
        }
    }, (err) => {
        return employeeMapper.editByIdErrorMapper()
    })
}

function deleteById(req) {
    return employeeService.deleteById(req).then((data) => {
        if (data === 1) {
            return employeeMapper.deleteByIdErrorMapper()
        } else if (data === 2) {
            return employeeMapper.employeeNotFoundError();
        } else if (data) {
            return employeeMapper.deleteByIdSuccessMapper(data);
        } else {
            return employeeMapper.deleteByIdErrorMapper()
        }
    }, (err) => {
        return employeeMapper.deleteByIdErrorMapper()
    })
}


module.exports = {
    create,
    getAll,
    getById,
    editById,
    deleteById
}