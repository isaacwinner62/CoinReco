const express = require("express");

// express app
const app = express();

// listen for request
app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/crypto-inves.html", { root: __dirname});
});

app.get("/sign-up", (req, res) => {
  res.sendFile("./views/sign-up.html", { root: __dirname});
});
