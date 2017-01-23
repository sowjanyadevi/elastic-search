var express = require('express');  
var router = express.Router();
var client = require('./extra/connection.js');

client.delete({  
  index: 'gov',
  id: '1',
  type: 'constituencies'
},function(err,resp,status) {
    console.log(resp);
});
