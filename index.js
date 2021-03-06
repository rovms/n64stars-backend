const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const routes = require("./routes");

app.use(cors());
app.use(bodyParser.json());

const dbUrl = process.env.DB_URL;

console.log(dbUrl);

if (!dbUrl) {
  console.log("DB not configured correctly: ");
}

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api", routes);

app.use(express.static(__dirname + "/public/"));

app.get("/.*/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
