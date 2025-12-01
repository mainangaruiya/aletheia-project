const mongoose = require('mongoose');

const escalationSchema = new mongoose.Schema({
  youthId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  level: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  actionTaken: String,
  supervisorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['open', 'in_progress', 'resolved', 'closed'],
    default: 'open'
  },
  resolutionNotes: String,
  followUpDate: Date,
  priority: {
    type: Number,
    default: 1
  }
}, {
  timestamps: true
});

// Auto-set priority based on level
escalationSchema.pre('save', function(next) {
  const priorityMap = {
    'low': 4,
    'medium': 3,
    'high': 2,
    'critical': 1
  };
  this.priority = priorityMap[this.level] || 4;
  next();
});

module.exports = mongoose.model('Escalation', escalationSchema);