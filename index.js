const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

require('./routes/api')(app);

const PORT =  5000;

app.listen(PORT);



