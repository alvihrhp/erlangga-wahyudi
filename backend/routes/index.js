const { Router } = require("express");
const IndexController = require("../controllers/index");

const routes = Router();

routes.get("/getData?", IndexController.getData);

module.exports = routes;
