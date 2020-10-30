var express = require('express');
var router = express.Router();
var Ctrl = require('../controllers/ctrl')
const fse = require('fs-extra')
const path = require('path')


router.get('/', Ctrl.dashboard);
/* GET home page. */
router.get('/history', Ctrl.index);

router.get('/add-income', Ctrl.renderAddIncome);
router.get('/add-expense', Ctrl.renderAddExpense);
router.post('/addRecord', Ctrl.addRecord);

router.get('/settings', Ctrl.renderSettings);
router.post('/changeSettings', Ctrl.settings);

router.get('/delete/:id', Ctrl.deleteRecord);


module.exports = router;
