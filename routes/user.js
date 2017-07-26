var express = require('express');
var router = express.Router();

var userController = require('../controllers/user-controller')

router.get('/', userController.index)
router.post('/', userController.create);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);

module.exports = router;
