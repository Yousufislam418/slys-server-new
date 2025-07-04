// models/Visitor.js
import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
  visitors: { type: String, required: true },
  date: { type: String, required: true }
});

const Visitor = mongoose.model('Visitor', visitorSchema);

export default Visitor;
