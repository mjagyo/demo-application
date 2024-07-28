const pool = require('./db');

const insertData = async (inputString, swappedReversedString) => {
  const sql = 'INSERT INTO "app_demo" (words) VALUES ($1) RETURNING *';
  const result = await pool.query(sql, [`<${inputString+","+swappedReversedString}>`]);
  return result.rows[0];
};

module.exports = {
  insertData,
};
