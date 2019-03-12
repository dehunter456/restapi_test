let router = require('express').Router();
// express router

router.get('/', (req, res) => {
  res.json({
    status: 'Working',
    message: 'Welcome, bitches'
  });
});

let simpleController = require("./simpleController");

router.route('/simple')
  .get(simpleController.index)
  .post(simpleController.new);

router.route('/simple/:sieemple')
  .get(simpleController.view);

module.exports = router;
