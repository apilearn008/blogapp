const express = require('express');
const app = express();
app.get("/newblog" ,function (req, res) {
  res.status(300).send("Sorry this service will be available shortly");

})
app.listen(8080);
