
var Task = require('./model');

module.exports = {

  // create  new task
  createTask: function(content, callback){
    new Task({
      content: content,
      update_at: Date.now()
    }).save(function(err, task, count) {
      if(!err) {
        callback();
        console.log('create successfully!');
      }else{
        console.err(err);
      }
    });
  },

  // list all tasks
  all: function(callback){
    Task.find(function(err, tasks, count) {
      if(!err) {
        callback(tasks, count);
      }else {
        console.log('Cannot retry the task list from database');
      }
    })
  },

  // delete task by id
  delete: function(id, callback){
    Task.findById(id, function(err, task) {
      if(!err) {
        task.remove();
        callback();
      }else{
        console.log(err);
      }
    });
  },

  // udpate task by id
  update: function(id, content, callback){
    Task.findById(id, function(err, task) {
      if(!err) {
        task.content = content;
        task.update_at = Date.now();
        task.save(function(err){
          console.log(err);
        });
        callback();
      }else {
        console.log('BD error');
      }
    });
  },

  // get task by id
  getTask: function(id, callback) {
    Task.findById(id, function(err, task) {
      callback(task);
    });
  }

};
