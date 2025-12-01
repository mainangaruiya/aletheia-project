const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  type: {
    type: String,
    enum: ['growth_mindset', 'gratitude', 'value_affirmation', 'group_discussion'],
    required: true
  },
  guideId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  participants: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  scheduledDate: {
    type: Date,
    required: true
  },
  duration: {
    type: Number, // in minutes
    default: 60
  },
  status: {
    type: String,
    enum: ['scheduled', 'ongoing', 'completed', 'cancelled'],
    default: 'scheduled'
  },
  location: {
    type: String,
    enum: ['online', 'in_person', 'hybrid']
  },
  notes: String,
  resources: [String], // URLs or file paths
  attendance: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    status: {
      type: String,
      enum: ['present', 'absent', 'excused']
    }
  }],
  feedback: {
    averageRating: Number,
    comments: [{
      userId: mongoose.Schema.Types.ObjectId,
      comment: String,
      rating: Number,
      date: Date
    }]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Session', sessionSchema);
