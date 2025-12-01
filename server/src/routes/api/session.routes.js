const express = require('express');
const router = express.Router();
const { authMiddleware, roleMiddleware } = require('../../middleware/auth.middleware');
const {
  createSession,
  getSessions,
  getSession,
  updateSession,
  deleteSession,
  addParticipant,
  recordAttendance,
  addFeedback
} = require('../../controllers/session.controller');

// All routes require authentication
router.use(authMiddleware);

// Only guides and admins can create sessions
router.post('/', roleMiddleware('guide', 'admin'), createSession);
router.get('/', getSessions);
router.get('/:id', getSession);
router.put('/:id', roleMiddleware('guide', 'admin'), updateSession);
router.delete('/:id', roleMiddleware('admin'), deleteSession);

// Session management
router.post('/:id/participants', roleMiddleware('guide', 'admin'), addParticipant);
router.post('/:id/attendance', roleMiddleware('guide', 'admin'), recordAttendance);
router.post('/:id/feedback', addFeedback);

module.exports = router;