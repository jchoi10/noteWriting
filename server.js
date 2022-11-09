const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

const apiRoutes = require('./routes/apiRoutes/apiRoutes');
const htmlRouts = require('./routes/htmlRoutes/htmlRoutes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRouts);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
