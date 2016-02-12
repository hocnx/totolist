var express = require('express');
var router = express.Router();
var Tasks = require('../models/tasks');

/* GET home page. */
router.get('/', function(req, res, next) {

  Tasks.all(function(tasks, count) {
      res.render('index', { title: 'Express', tasks:tasks });
  });
});

// create task
router.post('/create', function(req, res, next) {
  Tasks.createTask(req.body.task_name, function() {
    res.redirect('/');
  });
});

// delete task
router.get('/delete/:id', function(req, res, next) {
  Tasks.delete(req.params.id, function() {
    res.redirect('/');
  });
});

// get edit view
router.get('/edit/:id', function(req, res, next) {
  Tasks.getTask(req.params.id, function(task) {
    res.render('edit',{task:task});
  });
});

// update the task
router.post('/update', function(req, res, next) {

  Tasks.update(req.body.task_id, req.body.task_name, function() {
      res.redirect('/');
  });
});


module.exports = router;
