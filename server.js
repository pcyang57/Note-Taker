const express = require('express');
const path = require('path');

const app = express();


const PORT = process.env.PORT || 3006;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setup public folder client side
app.use(express.static('public'));

// api routes
require('./routes/apiroutes')(app);

// html route
require('./routes/index')(app);

app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`);
});