module.exports = {
    dbConnection: {
        user: "postgres",
        password: "12345678",
        host: "localhost",
        database: "CarDetails",
        port: 5432
    },
    server: {
        PORT: 3000,
    },
    jwtConfig: {
        algorithm: "HS256",
        secretKey: "Test@12345",
    },

};