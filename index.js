const express = require('express');
const router = require('./router');

const app = express();

app.use(express.static('client'));
app.use('/', router);

app.listen(4000);
console.log('listening on port 4000');