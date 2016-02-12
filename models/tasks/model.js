var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = new Schema({
  user_id: String,
  content: String,
  update_at: Date
});

module.exports = mongoose.model('Task', Task);
