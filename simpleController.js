Simple = require("./simpleModel");

exports.index = function (req, res) {
  Simple.get((err, data) => {
    if (err) {
      res.json({
        status: "Error",
        error: err
      });
    } else {
      res.json({
        status: "Success",
        message: "Ayy you got the data",
        data: data
      });
    }
  });
}

exports.new = function (req, res) {
  let simple = new Simple();
  simple.foo = req.body.foo;
  simple.bar = req.body.bar;
  simple.save((err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        message: "the schema was saved!!!1!",
        data: simple
      });
    }
  });
}

exports.view = function (req, res) {
  Simple.findById(req.params.id, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json({
        message: "hi",
        data: data
      });
    }
  });
}
