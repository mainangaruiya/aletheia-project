const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  youthId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sessionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Session'
  },
  metrics: {
    hopeScore: { // 1-10 scale
      type: Number,
      min: 1,
      max: 10
    },
    selfEsteem: {
      type: Number,
      min: 1,
      max: 10
    },
    anxietyLevel: {
      type: Number,
      min: 1,
      max: 10
    },
    engagement: {
      type: Number,
      min: 1,
      max: 10
    },
    gratitudeLevel: {
      type: Number,
      min: 1,
      max: 10
    }
  },
  notes: String,
  recordedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  isCritical: {
    type: Boolean,
    default: false
  },
  needsEscalation: {
    type: Boolean,
    default: false
  },
  escalationNotes: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Progress', progressSchema);