/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;
const slackController = require('./controllers/controller.js');

const { getData } = slackController;

/**
 * handle parsing request body
 */
app.use(express.json());

app.get('/api', getData, (req, res) => res.status(200).json(
  res.locals.data,
));
// .......................Error Handlers ............................................................

// catch-all route hanlder for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server ..........................................................................................
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
