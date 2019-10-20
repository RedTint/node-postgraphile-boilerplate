/**
 * Catch and log uncaught exceptions as soon as they happen, log them, then exit with error code 1.
 * Do this before loading anything else.
 */
process.on('uncaughtException', (exception) => {
    console.error(`An uncaughtException happened:\n${exception}`);
    process.exit(1);
});

const express = require('express');
const { postgraphile } = require('postgraphile');

const config = require('./config/config.js');
const { user, password, host, database, port, default_schema } = config.database;
console.log(process.env);
console.log(config.database);
const app = express();
app.use(
    postgraphile(
        process.env.DATABASE_URL || `postgres://${user}:${password}@${host}:${port}/${database}`,
        default_schema,
        {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql: true,
            retryOnInitFail: true
        }
    )
);

app.listen(config.port || 3000);
