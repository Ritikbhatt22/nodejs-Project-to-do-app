//require the library
const mongoose=require('mongoose');


// connect to database
mongoose.connect('mongodb://localhost/todotasks')

//aquire the connection(to check if it is successful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up ans running then prints the message
db.once('open',function(){
    console.log('sucessfully connected to db');
})