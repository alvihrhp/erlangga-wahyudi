const pool = require("../connection");

class CardNumber {
  static async findOne(payload) {
    try {
      const text = `SELECT * FROM user_tbl WHERE no_card = '${payload.card_number}'`;
      const res = await pool.query(text);
      if (!res.rows[0]) {
        throw "Data Not Found";
      }
      return res.rows[0];
    } catch (error) {
      return error;
    }
  }
}

module.exports = CardNumber;
