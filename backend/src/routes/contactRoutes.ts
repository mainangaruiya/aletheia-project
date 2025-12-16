import express from 'express';
import { 
  submitContact, 
  getContacts, 
  updateContactStatus, 
  deleteContact 
} from '../controllers/contactController';
import auth, { requireAdmin } from '../middleware/auth';

const router = express.Router();

// Public route - anyone can submit a contact form
router.post('/', submitContact);

// Protected routes - require authentication (and admin for some)
router.get('/', auth, requireAdmin, getContacts);
router.put('/:id/status', auth, requireAdmin, updateContactStatus);
router.delete('/:id', auth, requireAdmin, deleteContact);

export default router;
