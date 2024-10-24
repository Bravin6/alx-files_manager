const redisClient = require('../utils/redis');
const dbClient = require('../utils/db');

/**
 * AppController class
 */
class AppController {
  // Handle GET /status
  static async getStatus(req, res) {
    try {
      // Check Redis and DB status
      const redisAlive = redisClient.isAlive();
      const dbAlive = dbClient.isAlive();
      return res.status(200).json({ redis: redisAlive, db: dbAlive });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Handle GET /stats
  static async getStats(req, res) {
    try {
      // Fetch number of users and files in the DB
      const usersCount = await dbClient.nbUsers();
      const filesCount = await dbClient.nbFiles();
      return res.status(200).json({ users: usersCount, files: filesCount });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = AppController;
