function encrypt(data) {
    return "encryped data"
}

function send(url, data) {
    const encryptedData = encrypt(data)
    console.log(`Sending ${encryptedData} to ${url}`);
}

// Exporting modules to publicly available.
// only send function will be available for use.
// It is better to write your module export in this way unlikely searching in enitre codebase.
// writing in other ways as in response.js.
module.exports = { send }