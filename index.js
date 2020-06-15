const express= require('express');
const route =express.Router();

//use express router
// var path = require(path)
var bodyParser = require('body-parser');
const routes= require("./routes/index")
// tasks schema
const Task = require("./models/tasks");

const db = require("./config/mongoose");
let app = express();
app.use(express.urlencoded());

app.use("/",routes);


// set up the view engine 
app.set('view engine','ejs');
app.set('views','./views');
// app.set("views", path.join(__dirname, "views"));
app.use(express.static("assets"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let port =8000;

app.listen(port,function(err){
    if(err){console.log(`Error in running a server:${err}`)}
    console.log(`server is running on port : ${port}` );
    
})