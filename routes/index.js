const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.post('/add-task',homeController.addTask);
router.get('/delete-task',homeController.deleteTask);
router.get('/toggle-task',homeController.toggleTask);
router.get('/delete-completed',homeController.deleteCompleted);

module.exports = router;
