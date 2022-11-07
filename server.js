<reference path="./@types/jquery" />

const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRouts = require('./routes/htmlRoutes');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});