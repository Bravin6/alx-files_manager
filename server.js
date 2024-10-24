const express = require('express');
const routes = require('./routes'); // Load routes from routes/index.js

const app = express();
const port = process.env.PORT || 5000; // Use PORT from env or default to 5000

app.use(express.json({ limit: '100mb' })); // Use JSON parser with limit
app.use('/', routes); // Load routes

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
