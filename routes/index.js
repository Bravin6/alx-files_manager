import { Router } from 'express';
import AppController from '../controllers/AppController';

// Create a new router instance
const router = Router();

// Define the endpoints
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

export default router;
