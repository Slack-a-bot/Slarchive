const { Pool } = require("pg");
const db = require ('../models/slackModel.js')
const slackController = {};

slackController.getData = (req, res, next) => {
  const text = 'SELECT * FROM slack;'
  try{
    db.query(text, (error, result)=>{
      console.log(result.rows);
      return next();
    });
  }
  catch{
    return next({
      log: "fatal error retrieving expenses from database inside controller.getData",
      status: 404,
    });
  }
};

module.exports = slackController;
