const express= require('express');

let app = express();

let port =8000;

app.listen(port,function(err){
    if(err){console.log(`Error in running a server:${err}`)}
    console.log(`server is running on port : ${port}` );
    
})