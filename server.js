import express from 'express';
import routes from './routes/index';

// Initialize the express app
const app = express();

// Use the routes defined in routes/index.js
app.use('/', routes);

// Set the port to the environment variable or default to 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
