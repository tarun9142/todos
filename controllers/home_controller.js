const Task = require('../models/task');

module.exports.home = function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log('error rendering tasks');
            return;
        }
        return res.render('home',{
            title: "My Todos",
            tasks:tasks
        });
    })
}

module.exports.addTask = function(req,res){
    Task.create({
        task_text:req.body.task,
        label:req.body.label,
        due_date:req.body.due_date,
        checked:false
    },function(err,newTask){
        if(err){
            console.log('error adding new task');
            return;
        }
        console.log('new task created');
        return res.redirect('back');
    })
}

module.exports.deleteTask = function(req,res){
    let id = req.query.id;
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error deleting the task');
            return;
        }
        console.log('deleted task successfully');
        return res.redirect('back');
    })
}

module.exports.toggleTask = function(req,res){
    let id = req.query.id;
    Task.findById(id,function(err,x){
        if (err) {
            console.log('error toggling task');
            return;
        }
        Task.findByIdAndUpdate(id,{checked:!(x.checked)},function(err){
            if(err){
                console.log('error toggling task');
                return;
            }
            return res.redirect('back');
        });
    }
    );
}

module.exports.deleteCompleted = function(req,res){
    Task.deleteMany({checked:true},function(err){
        if(err){
            console.log('error deleting completed tasks');
            return;
        }
        return res.redirect('back');
    })
}

