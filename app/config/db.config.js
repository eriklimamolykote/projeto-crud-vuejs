module.exports = {
    HOST: "localhost",
    USER: "erik",
    PASSWORD: "12345678",
    DB: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};