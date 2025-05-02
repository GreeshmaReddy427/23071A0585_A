import express from 'express';
import { addStudent, getStudents, getAttendanceRecords } from '../controllers/studentController.js';

const router = express.Router();

router.post('/students', addStudent);
router.get('/students', getStudents);
router.get('/students/:id/attendance', getAttendanceRecords);

export default router;