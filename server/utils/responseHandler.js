function successResponse(res, result) {

    var response = {
        status: result.status,
        message: result.message,
        data: result.data
    }
    _sendResponse(res, response);
}

function errorHandler(res, result) {
    var response = {
        status: result.status,
        message: result.message,
        data: {}
    }
    _sendResponse(res, response);
}

module.exports = {
    successResponse,
    errorHandler

}

function _sendResponse(res, result) {
    res.send(result)
}