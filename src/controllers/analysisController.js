const { validateCode } = require('../utils/validator');

function analyzeCode(req, res) {
    const { code } = req.body;
    const validationResults = validateCode(code);
    res.json(validationResults);
}

module.exports = { analyzeCode };