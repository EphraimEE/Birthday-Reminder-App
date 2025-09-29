const User = require('../models/User');


exports.createUser = async (req, res) => {
try {
const { username, email, dateOfBirth } = req.body;
if (!username || !email || !dateOfBirth) return res.status(400).json({ message: 'username, email and dateOfBirth are required' });


const exists = await User.findOne({ email });
if (exists) return res.status(400).json({ message: 'Email already exists' });


const user = new User({ username, email, dateOfBirth: new Date(dateOfBirth) });
await user.save();


res.status(201).json({ message: 'User created', user });
} catch (err) {
if (err.code === 11000) return res.status(400).json({ message: 'Email already exists' });
res.status(500).json({ message: 'Server error', error: err.message });
}
};


exports.getUsers = async (req, res) => {
try {
const users = await User.find().sort({ createdAt: -1 });
res.json(users);
} catch (err) {
res.status(500).json({ message: err.message });
}
};