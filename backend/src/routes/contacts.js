import express from 'express';
const router = express.Router();
import {
  create,
  getAll,
  get,
  update,
  deleteContact,
} from '../controllers/contactController.js';
router.route('/contacts').post(create).get(getAll);
router.route('/contacts/:contactId').get(get).put(update).delete(deleteContact);
export default router;
