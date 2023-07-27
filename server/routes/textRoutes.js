const express = require('express');
const router = express.Router();

const text = require('../controllers/text/text');
const { config } = require('../controllers/text/textTranslate'); // Destructure the exported functions
const textComputeNMT = require('../controllers/text/textComputeNMT');

router.post('/text', text);
router.post('/config', config); 
router.post('/textComputeNMT', textComputeNMT);

module.exports = router;
