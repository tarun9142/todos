const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        task_text:{
            type:String,
            required:true
        },
        label:{
            type:String,
        },
        due_date:{
            type:Date,
            required:true
        },
        checked:{
            type:Boolean
        }

    }
);

const Task  = mongoose.model('Task',taskSchema);

module.exports = Task;