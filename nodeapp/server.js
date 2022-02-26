var express = require('express');

//Express Code

var app = express();

var path=require("path");

var fs=require("fs");


app.use(express.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/index.html'));
});
 

app.get('/greet', function (req, res) {
  console.log("Calling rest api..Hello");
  var person={firstName:'Mitesh',lastName:'Kulkarni',age:24};
  res.send(person);
});

 
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://localhost:8081", host, port)
})