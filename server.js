// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Visitor from './models/Visitor.js';

dotenv.config();

const app = express();
const PORT = 3003;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connect
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Routes
app.get('/', (req, res) => {
  res.send('Server is running on port 3003!');
});

// Add a visitor
app.post('/visitors', async (req, res) => {
  const { visitors, date } = req.body;
  try {
    const newVisitor = new Visitor({ visitors, date });
    await newVisitor.save();
    res.status(201).json(newVisitor);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save visitor' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
