module.exports = {
    'secret': 'supersecret',
    server: {
        host: 'localhost',
        port: 3002
    },
    database: {
        host: 'localhost',
        port: 27017
    },
    key: {
        privateKey: '37LvDSm4XvjYOh9Y',
        tokenExpiry: 1 * 30 * 1000 * 60 //1 hour
    },
    email: {
        username: "sendermailid",
        password: "senderpassword",
        verifyEmailUrl: "verifyEmail",
        resetEmailUrl: "reset"
    }
};