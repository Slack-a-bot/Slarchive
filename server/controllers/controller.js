/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
const { Pool } = require('pg');
const db = require('../models/slackModel.js');

const slackController = {};

slackController.getData = (req, res, next) => {
  const text = 'SELECT * FROM conversations;';
  try {
    db.query(text, (error, result) => {
      console.log(result.rows[0]);
      return next();
    });
  } catch {
    return next({
      log: 'fatal error retrieving expenses from database inside controller.getData',
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = slackController;
