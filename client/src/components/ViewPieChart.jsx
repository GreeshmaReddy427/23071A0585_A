import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#00C49F', '#FF8042']; 

const ViewPieChart = ({ students }) => {
  const countStatus = (statusType) =>
    students.filter((student) => student.status === statusType).length;

  const chartData = [
    { name: 'Present', value: countStatus('present') },
    { name: 'Absent', value: countStatus('absent') },
  ];

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <h3>Attendance Pie Chart</h3>
      {chartData.every(item => item.value === 0) ? (
        <p>No attendance data available.</p>
      ) : (
        <PieChart width={300} height={300}>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  );
};

export default ViewPieChart;
