var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tasks = new Schema({
  user_id: String,
  content: String,
  update_at: Date
});

mongoose.model('Tasks', Tasks);
mongoose.connect('mongodb://localhost/todolist');
