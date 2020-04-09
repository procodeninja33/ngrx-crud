const CODE = {
    requiredField: 500,
    ok: 200,
    badrequest: 400,
    Unauthorized: 401,
    forbiddenRequest: 403
}

const REQUIREDFIELDS = {

}
const MESSAGE = {
    createSuccess: 'Employee Create Successfully.',
    createError: 'There is issue in create employee.',
    getAllSuccess: 'Employee list get successfully.',
    getAllError: 'There is some issue in get employee list.',
    getByIdSuccess: 'Employee get successfully.',
    getByIdError: 'There is some issue in get employee.',
    employeeNotFound: 'Employee not found.',
    editByIdSuccess: 'Employee edit successfully.',
    editByIdError: 'There is some issue in edit employee.',
    deleteByIdSuccess: 'Employee delete successfully.',
    deleteByIdError: 'There is some issue in delete employee.'
}



module.exports = {
    CODE,
    MESSAGE,
    REQUIREDFIELDS
}