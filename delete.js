var client = require('./extra/connection.js');

client.indices.delete({index: 'gov1'},function(err,resp,status) {  
  console.log("delete",resp);
});