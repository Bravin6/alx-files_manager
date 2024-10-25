import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController'; // Import the UsersController

// Create a new router instance
const router = Router();

// Define the endpoints
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// Add the new endpoint for creating a user
router.post('/users', UsersController.postNew); // Handle POST requests to /users

export default router;
