const express= require('express');
const route =express.Router();
//use express router
const routes= require("./routes/index")

let app = express();

app.use("/",routes);
app.use(express.urlencoded());

// set up the view engine 
app.set('view engine','ejs');
app.set('views','./views');

let port =8000;

app.listen(port,function(err){
    if(err){console.log(`Error in running a server:${err}`)}
    console.log(`server is running on port : ${port}` );
    
})