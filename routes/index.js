var express = require('express');
var router = express.Router();
var Ctrl = require('../controllers/ctrl')
const fse = require('fs-extra')
const path = require('path')


/* GET home page. */
router.get('/', Ctrl.index);

router.get('/add', Ctrl.renderAdd);
router.post('/addRecord', Ctrl.addRecord);

router.post('/settings');

router.get('/delete/:id', Ctrl.deleteRecord);


module.exports = router;
