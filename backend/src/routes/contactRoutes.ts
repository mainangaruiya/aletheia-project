import express from 'express';
import { 
  submitContact, 
  getContacts, 
  getContactStats,  // Now this will exist
  updateContactStatus, 
  deleteContact 
} from '../controllers/contactController';
import { authenticate, requireAdmin } from '../middleware/auth';

const router = express.Router();

// Public route - anyone can submit a contact form
router.post('/', submitContact);

// Protected routes - require authentication (and admin for some)
router.get('/', authenticate, requireAdmin, getContacts);
router.get('/stats', authenticate, requireAdmin, getContactStats);
router.put('/:id/status', authenticate, requireAdmin, updateContactStatus);
router.delete('/:id', authenticate, requireAdmin, deleteContact);

export default router;
