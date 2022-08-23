var express = require('express');
var indexFunctions = require('./routes/index');

const router = express.Router();

router.get('/', indexFunctions.home);

module.exports = router;