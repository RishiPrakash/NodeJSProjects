var express = require("express");
var restAPI = require("./restAPI");
var expressValidator = require('express-validator');


var app = express();

console.log("starting to listen");
app.use(expressValidator());
app.get("/",function(req,res){
console.log("calling the callGet API");
    restAPI.callGet(req,res);
})





app.listen(8080);

console.log("started to listen");