const express = require('express');
const router = express.Router();
const userController = require('./controllers/user.controller');
const ideaController = require('./controllers/idea.controller');


//user CRUD
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/ideas', ideaController.list);
router.post('/ideas', ideaController.create);
router.post('/ideas/:id/like', ideaController.like);

module.exports = router;
