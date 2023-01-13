const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true - or as below with a custom messsage
    required: [
      true,
      'entry must be a name, it cannot be empty, and type must be a string',
    ],
    // trim removes dormant extra spaces
    trim: true,
    //max length validates entry length
    maxlength: [20, 'name cannot be more than 20 characters'],
  },
  //   completed: Boolean, - add just the value(same can be done for name as above), or with some extras in objects as below.
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', taskSchema);
