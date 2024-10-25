import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  // Method for handling GET /status
  static getStatus(req, res) {
    const status = {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
    return res.status(200).json(status);
  }

  // Method for handling GET /stats
  static async getStats(req, res) {
    const users = await dbClient.nbUsers();  // Get number of users
    const files = await dbClient.nbFiles();  // Get number of files
    const stats = {
      users,
      files,
    };
    return res.status(200).json(stats);
  }
}

export default AppController;
