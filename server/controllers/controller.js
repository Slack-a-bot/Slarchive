/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
const { Pool } = require('pg');
const db = require('../models/slackModel.js');

const slackController = {};
// 'SELECT * FROM channel '
slackController.getData = (req, res, next) => {
  const text = 'select * from conversations';
  //select c.id,c.channel,c.user_name,c.text,c.ts,n.chanel_name FROM conversations c INNER JOIN channel n ON c.channel = n.channel_id
  try {
    db.query(text, (error, result) => {
      res.locals.data = result.rows;
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
