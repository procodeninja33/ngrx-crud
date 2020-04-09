export interface ApiResponse {
    status: Number,
    message: String,
    data: Object
}

export interface Employees {
    _id: String,
    emp_isDelete: Boolean,
    emp_firstname: String,
    emp_lastname: String,
    emp_mobile: String,
    emp_email: String
}