const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
const slackController = require('./controllers/controller.js');
const { getData } = slackController;

/**
 * handle parsing request body
 */

app.use(express.json());

app.get("/", getData, (req, res) =>
res.status(200).send("hi")
);

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});