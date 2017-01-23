var client = require('./extra/connection.js');


client.indices.create({  
  index: 'gov1'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});
