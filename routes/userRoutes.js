const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// create user
router.post('/users', userController.createUser);


// list users
router.get('/users', userController.getUsers);


// manual trigger: send emails to today's celebrants (for testing)
router.post('/send-today', async (req, res) => {
try {
const birthdayService = require('../services/birthdayService');
const mailService = require('../services/mailService');
const celebrants = await birthdayService.getTodaysCelebrants();
for (const c of celebrants) await mailService.sendBirthdayEmail(c);
res.json({ message: `Sent to ${celebrants.length} celebrant(s)` });
} catch (err) { res.status(500).json({ message: err.message }); }
});


// test sending a single email (useful for checking templates)
router.post('/test-email', async (req, res) => {
try {
const { email, username } = req.body;
if (!email) return res.status(400).json({ message: 'email required' });
const mailService = require('../services/mailService');
await mailService.sendBirthdayEmail({ email, username: username || 'Friend' });
res.json({ message: 'Test email sent' });
} catch (err) { res.status(500).json({ message: err.message }); }
});


module.exports = router;