<<<<<<< HEAD
// controllers/AppController.js
const redisUtils = require('../utils/redis');
const dbUtils = require('../utils/db');
=======
import dbClient from '../utils/db';
import redisClient from '../utils/redis';
>>>>>>> cc971b572d16c3433e79ddc3a05771323fc21b83

/**
 * AppController class
 */
class AppController {
<<<<<<< HEAD
  // Handle GET /status
  static async getStatus(req, res) {
    try {
      // Check if Redis and DB are alive
      const redisAlive = await redisUtils.isAlive();
      const dbAlive = await dbUtils.isAlive();

      return res.status(200).json({ redis: redisAlive, db: dbAlive });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Handle GET /stats
  static async getStats(req, res) {
    try {
      // Fetch number of users and files in the DB
      const usersCount = await dbUtils.getNumberOfUsers();
      const filesCount = await dbUtils.getNumberOfFiles();

      return res.status(200).json({ users: usersCount, files: filesCount });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
=======
  /**
   * Retrieves the status of redisClient and dbClient, sets the response status
   * code to 200, and sends the status of the clients in a JSON format in the
   * response.
   *
   * @param {Object} request - The request object.
   * @param {Object} response - The response object.
   * @return {JSON} A JSON object containing the status of redisClient and
   * dbClient.
   */
  static getStatus(request, response) {
    response.statusCode = 200;
    response.send({
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    });
  }

  /**
   * Retrieves statistics from database and sends results in response.
   *
   * @param {Object} request - the request object
   * @param {Object} response - the response object
   * @return {Promise} a Promise that resolves when the response is sent
   */
  static async getStats(request, response) {
    response.statusCode = 200;
    response.send({
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    });
>>>>>>> cc971b572d16c3433e79ddc3a05771323fc21b83
  }
}

export default AppController;
