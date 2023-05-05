const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const tasksRouter = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/tasks', tasksRouter); 

// Connect to MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// mongodb+srv://practiceUser:databasePass@practice.zsad8md.mongodb.net/?retryWrites=true&w=majority
// practiceUser
// databasePass