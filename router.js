const express = require('express');
const multer = require('multer');
const findLargestPuddle = require('./functions/findLargestPuddle');
const findWaterLevels = require('./functions/findWaterLevels');

const router = express.Router();
const upload = multer();

router.post('/process', upload.fields([]), (req, res) => {
    let wallHeights = req.body.wallHeights;
    let results = {
        largestPuddle: findLargestPuddle(wallHeights), 
        waterLevels: findWaterLevels(wallHeights)
    }
    res.json(results);
});

module.exports = router;