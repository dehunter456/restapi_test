Simple = require("./simpleModel"); // The schema (class) we will use to do this stuff

// The index function just lets us get the simple objects from the db
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

// The new function creates a new Simple object in the db
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

// Lets us view individual Simple objects
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
