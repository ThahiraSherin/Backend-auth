const express = require ('express');
const logger = require('./utilis/logger');
const errorRoute = require ('./utilis/errorRoute');
const authRouter = require('./Routes/authRouter');


const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/v1/auth', authRouter);

app.use(errorRoute);

module.exports = app;