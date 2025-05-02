import Student from '../models/Student';

export const addStudent = async (req, res) => {
  const { name, attendanceRecords } = req.body;

  try {
    const newStudent = new Student({ name, attendanceRecords });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAttendanceRecords = async (req, res) => {
  const { studentId } = req.params;

  try {
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student.attendanceRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};