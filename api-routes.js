/*
	A Router is an object that essentially lets the app communicate with the client. It doesn't actually do anything that changes the 
	db – instead, it acts as the messenger. 
*/
let router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    status: 'Working',
    message: 'Welcome, bitches'
  });
});

// The controller is the object that actually changes the db
let simpleController = require("./simpleController"); 

// When we make a call to ../rest_api/api/simple, we can execute the controller's index command if it's a get request or the 
// new command if it's a post request
router.route('/simple')
  .get(simpleController.index)
  .post(simpleController.new);

// When we make a get request to ../rest_api/api/simple/:siemple, we can execute the controller's view command
router.route('/simple/:sieemple')
  .get(simpleController.view);

module.exports = router;
