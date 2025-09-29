require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');


const app = express();
const PORT = process.env.PORT || 3000;


// connect to DB
connectDB();


// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('cors')());


// routes
app.use('/api', userRoutes);


// serve static frontend
app.use(express.static(path.join(__dirname, 'public')));


// start cron job (job registers itself on require)
require('./jobs/birthdayJob');


app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});