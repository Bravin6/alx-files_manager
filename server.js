
<<<<<<< HEAD
const express = require('express');
const routes = require('./routes'); // Load routes from routes/index.js

const app = express();
const port = process.env.PORT || 5000; // Use PORT from env or default to 5000

// Use routes
app.use('/', routes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
=======
import express from 'express';
import router from './routes';

const app = express();
app.use(express.json({ limit: '100mb' }));
app.use(router);
app.listen(process.env.PORT || 5000);

export default app;
>>>>>>> cc971b572d16c3433e79ddc3a05771323fc21b83
