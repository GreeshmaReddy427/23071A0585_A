import React, { useState, useEffect } from 'react';
import ViewPieChart from './ViewPieChart';
import './AddStudent.css';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('present');
  const [students, setStudents] = useState([]);
  const [showChart, setShowChart] = useState(false);


  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, { name, status }]);
    setName('');
    setStatus('present');
    setShowChart(false);
  };

  const handleShowChart = () => {
    setShowChart(true);
  };

  const countStatus = (statusType) =>
    students.filter((student) => student.status === statusType).length;

  return (
    <div className="page-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Add Student</h2>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Status:</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="present"
                checked={status === 'present'}
                onChange={(e) => setStatus(e.target.value)}
              />
              Present
            </label>
            <label>
              <input
                type="radio"
                value="absent"
                checked={status === 'absent'}
                onChange={(e) => setStatus(e.target.value)}
              />
              Absent
            </label>
            <label>
              <input
                type="radio"
                value="given"
                checked={status === 'given'}
                onChange={(e) => setStatus(e.target.value)}
              />
              Given
            </label>
          </div>
        </div>

        <button type="submit">Add Student</button>
        <button type="button" onClick={handleShowChart} style={{ marginTop: '1rem' }}>
          Show Pie Chart
        </button>
      </form>

      {showChart && <ViewPieChart students={students} />}
    </div>
  );
};

export default AddStudent;
