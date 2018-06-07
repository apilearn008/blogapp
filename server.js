const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;

const path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

mongoClient.connect('mongodb://localhost/database-name', function (err, db){
  if(err) throw err;
  else {
    app.post("/newblog", function(req, res){
      var dataObj = db.db('database-name');
      dataObj.collection('blogs').insert(req.body, function (err, res) {
        if(err) throw err;
        console.log(req.body);
        console.log("collection created");
        db.close;
      });
      res.status(200).send("NEW blog created");

    });
    app.get('/getblogs', function(req, res){
    var dbObj = db.db('database-name');
      dbObj.collection('blogs').find({}).toArray(function (err,result) {
      if(err) throw err;
      console.log(result);
      res.status(200).json(result);
    });

    });
  }

});

app.get("/blogs", function (req, res){
  res.status(200).sendFile(path.resolve("views/blogs.html"));
});
app.get("/home" ,function (req, res) {
  res.status(200).sendFile(path.resolve("views/index.html"));

});
app.get("/styles/style.css", function (req, res) {
  res.status(200).sendFile(path.resolve("styles/style.css"));
});
app.get("/blogs/blog1", function (req, res){
  res.status(200).sendFile(path.resolve("views/blog.html"));
});
app.get("/newblog", function (req, res){
  res.status(200).sendFile(path.resolve("views/newblog.html"));
});

app.listen(3000);
