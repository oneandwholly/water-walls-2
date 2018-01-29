const express = require('express');
const multer = require('multer');
const findLargestPuddle = require('./functions/findLargestPuddle');
const findWaterLevels = require('./functions/findWaterLevels');

const router = express.Router();
const upload = multer();

router.post('/process', upload.fields([]), (req, res) => {
    let wallHeights = req.body.wallHeights;

    wallHeights = wallHeights.split('').reduce((acc, char) => {
        char = parseInt(char);
        if (Number.isInteger(char)) {
            return [ ...acc, char ];
        }
        return acc;
    }, []);

    let results = {
        largestPuddle: findLargestPuddle(wallHeights), 
        waterLevels: findWaterLevels(wallHeights)
    }
    res.json(results);
});

module.exports = router;