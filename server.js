const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public folder for clients
app.use(express.static('public'));

// API route
require('./routes/apiRoutes')(app);

// HTML route
require('./routes/htmlRoutes')(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);