const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(routes);
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening in PORT: ${PORT} `);
});
