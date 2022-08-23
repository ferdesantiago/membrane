var express = require('express');
var indexFunctions = require('./routes/index');
var verifier = require('./libs/verifier');

const router = express.Router();

router.get('/', indexFunctions.home);
router.get('/tips', verifier.verifyPairsName, indexFunctions.bookTips);
router.get('/order', verifier.verifyPairsName, indexFunctions.order);

module.exports = router;