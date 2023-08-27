validate = (username, password) => {
    return ['Successfully Logged in!','Wrong username or password!'][(username+password).match(/0|=|\||\//) ? 1 : 0];
}


module.exports = { validate }