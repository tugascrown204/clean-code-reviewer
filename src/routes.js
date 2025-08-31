const express = require('express');
const { analyzeCode } = require('./controllers/analysisController');
const router = express.Router();

router.post('/analyze', analyzeCode);

module.exports = router;