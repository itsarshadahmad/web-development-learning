function encrypt(data) {
    return "encryped data"
}

function send(url, data) {
    const encryptedData = encrypt(data)
    console.log(`Sending ${encryptedData} to ${url}`);
}

export { send }