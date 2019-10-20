module.exports = {
    "port": process.env.API_PORT || 3000,
    "cors_allow_origin": "",
    "cors_allow_headers": "",
    "database": {
        database: process.env.POSTGRES_DB,
        user: process.env.DB_ADMIN_USER,
        password: process.env.DB_ADMIN_PASS,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        default_schema: process.env.DB_DEFAULT_SCHEMA,
        ssl: false,
        max: 20, // set pool max size to 20
        min: 5, // set min pool size to 4
        idleTimeoutMillis: 1000, // close idle clients after 1 second
        connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
    }
};

