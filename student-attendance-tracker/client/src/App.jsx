import React from 'react';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import AttendanceRecord from './components/AttendanceRecord';

function App() {
  return (
    <div>
      <h1>Student Attendance Tracker</h1>
      <AddStudent />
      <StudentList />
      <AttendanceRecord />
    </div>
  );
}

export default App;