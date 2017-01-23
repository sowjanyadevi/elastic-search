var express = require('express');
var router = express.Router();
var client = require('./extra/connection.js');

router.post('/', function(req, res, next) {
  var term = req.body.searchterm;
  client.search({  
  index: 'gov1',
  type: 'constituencies',
  body: {
    query: {
      match: { "ConstituencyName": term }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      //console.log("--- Response ---");
      console.log(response.hits.hits);
      res.render('search', { title: 'Express' , response:response});
      //console.log("--- Hits ---");
      //response.hits.hits.forEach(function(hit){
      //console.log(hit);
       }
     }
  );
   
});

module.exports = router;