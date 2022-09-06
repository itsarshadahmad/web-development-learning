// This also way to export your modules
// module.exports.REQUEST_TIMEOUT = 500
// OR
exports.REQUEST_TIMEOUT = 500

function decrypt(data) {
    return "decrypted data"
}

// Another syntax to export modules
module.exports.read = function read() {
    return decrypt("data")
}
// OR
// exports.read = function read() {
//     return decrypt("data")
// }

// If single module to export.
// In this case now when importing it is already function and used as function unlikely object.
// to call function. ex- obj.funcName(), it is now ex- funcName()
// module.exports = function read() {
//     return decrypt("data")
// }

// module.exports = { read }