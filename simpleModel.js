const mongoose = require('mongoose');

let simpleSchema = mongoose.Schema({
  foo: {
    type: String,
    required: true
  },
  bar: Number
});

var Simple = module.exports = mongoose.model('simple', simpleSchema);

module.exports.get = (callback, limit) => {
  Simple.find(callback).limit(limit);
}
