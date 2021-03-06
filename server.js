require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static("/build/"));
app.use(express.static(path.join(__dirname, "/build")));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/build" });
});

const { PORT } = process.env;
app.listen(PORT, () => console.log("port: " + PORT));
