const crypto = require('crypto');
const User = require('../models/User'); // Make sure to import your User model

class UsersController {
    static async postNew(req, res) {
        const { email, password } = req.body;

        // Check for missing email
        if (!email) {
            return res.status(400).json({ error: 'Missing email' });
        }

        // Check for missing password
        if (!password) {
            return res.status(400).json({ error: 'Missing password' });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Already exist' });
        }

        // Hash the password using SHA1
        const hashedPassword = crypto.createHash('sha1').update(password).digest('hex');

        // Create the new user
        const newUser = new User({
            email,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        // Return the new user (only id and email)
        return res.status(201).json({ id: newUser._id, email: newUser.email });
    }
}

module.exports = UsersController;
