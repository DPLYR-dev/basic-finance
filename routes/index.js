var express = require('express');
var router = express.Router();
var Ctrl = require('../controllers/leads')
const fse = require('fs-extra')
const path = require('path')


/* GET home page. */
router.get('/', Ctrl.index);

router.get('/add', Ctrl.getLeads);

router.post('/settings', Ctrl.addLead);

router.get('/delete/:id', Ctrl.deleteLead);


module.exports = router;
