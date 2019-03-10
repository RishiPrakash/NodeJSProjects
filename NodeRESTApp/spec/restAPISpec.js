var restAPI = require("../restAPI.js")
var httpMocks = require('node-mocks-http');
var http = require('http');
var superagent = require("superagent");

describe("Test Suite", function() {
    it("test spec", function() {
        //console.log("It is running");
       // expect( expression ).toEqual(true);
var request = superagent.agent();
        
        
        
         request
   .get('http://localhost:8080/')
   .then(res => {
             console.log("some response is coming!!!");
      // res.body, res.headers, res.status
   })
   .catch(err => {
             console.log("error response is coming!!!");
      // err.message, err.response
   });
        
             
    });
});