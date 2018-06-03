const express = require('express');
const app = express();
const path = require('path');
app.get("/home" ,function (req, res) {
  res.status(200).sendFile(path.resolve("index.html"));

});
app.get("/styles/style.css", function (req, res) {
  res.status(200).sendFile(path.resolve("styles/style.css"));
})
app.listen(8080);
