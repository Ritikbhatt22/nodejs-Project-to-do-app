const mongoose= require('mongoose');

const TaskSchema= new mongoose.Schema({


    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    }
})

const Tasks = mongoose.model('Task',TaskSchema);

module.exports=Tasks