module.exports = {
    port: process.env.PORT || 9010,
    db: {
        database: process.env.DB_NAME || 'libraryManagementSystem',
        user: process.env.USER || 'admin',
        password: process.env.DB_PASS || 'ima_1234',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './libraryManagementSystem.sqlite'
        }
    }
}