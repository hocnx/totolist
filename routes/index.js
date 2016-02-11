var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tasks = mongoose.model('Tasks');

/* GET home page. */
router.get('/', function(req, res, next) {

  //TODO: add short function
  Tasks.find(function(err, tasks, count) {
    if(!err) {
      res.render('index', { title: 'Express', tasks:tasks });
    }else {
      console.log('Cannot retry the task list from database');
    }
  });

});

// create task
router.post('/create', function(req, res, next) {
  console.log('create task %s', req.body.task_name);
  // TODO:create todo then save it her
  new Tasks({
    content: req.body.task_name,
    update_at: Date.now()
  }).save(function(err, task, count) {
    if(!err) {
      res.redirect('/');
    }else{
      console.log('some errors!');
    }
  });
});

// delete task
router.get('/delete/:id', function(req, res, next) {
  //TODO: delete user here
  Tasks.findById(req.params.id, function(err, task) {
    if(!err) {
      task.remove();
      res.redirect('/');
    }else{
      console.log(err);
    }
  })
});

// get edit view
router.get('/edit/:id', function(req, res, next) {
  //TODO: Retry the edit id here
  Tasks.findById(req.params.id, function(err, task) {
    if(!err) {
      res.render('edit',{task:task});
    }else {
      console.log('DB error');
    }
  })
});

// update the task
router.post('/update', function(req, res, next) {
  Tasks.findById(req.body.task_id, function(err, task) {
    if(!err) {
      task.content = req.body.task_name;
      task.update_at = Date.now();
      task.save(function(err){
        console.log(err);
      });
      res.redirect('/');
    }else {
      console.log('BD error');
    }
  })
});


module.exports = router;
