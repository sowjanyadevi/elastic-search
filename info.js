var client = require('./extra/connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});