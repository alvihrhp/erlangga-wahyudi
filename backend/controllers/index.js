const CardNumberModel = require("../models/CardNumber");

class IndexController {
  static async getData(req, res) {
    try {
      const { card_number } = req.query;
      const result = await CardNumberModel.findOne({ card_number });
      if (result === "Data Not Found") {
        throw { message: result };
      }
      res.status(200).json({
        result,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  }
}

module.exports = IndexController;
