require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const transcriptionRoutes = require('./routes/transcriptionRoutes');

const app = express();

// Connect to DB
connectDB();

// CORS Middleware (must be before express.json and routes)
app.use(cors()); // allow all for testing

app.use(express.json());

// API Routes
app.use('/api/transcriptions', transcriptionRoutes);

// Start Server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));