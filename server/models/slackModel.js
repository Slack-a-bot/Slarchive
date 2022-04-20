const { Pool } = require('pg');
require('dotenv').config();

const myURI = process.env.PSQL_URI;
const pool = new Pool({
  connectionString: myURI,
});

module.exports = {
  query: (text, params, callback) =>
    // console.log('executed query', text);
    // eslint-disable-next-line implicit-arrow-linebreak
    pool.query(text, params, callback),

};
