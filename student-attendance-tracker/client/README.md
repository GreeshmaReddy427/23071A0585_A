# Student Attendance Tracker

This project is a MERN (MongoDB, Express, React, Node.js) application designed for tracking student attendance. It allows users to add students, view a list of enrolled students, and check attendance records.

## Project Structure

```
student-attendance-tracker
├── client
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── AddStudent.jsx
│   │   │   ├── StudentList.jsx
│   │   │   └── AttendanceRecord.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── styles
│   │       └── App.css
│   ├── package.json
│   └── README.md
├── server
│   ├── controllers
│   │   └── studentController.js
│   ├── models
│   │   └── Student.js
│   ├── routes
│   │   └── studentRoutes.js
│   ├── server.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory and install dependencies:
   ```
   cd student-attendance-tracker/client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the MongoDB server.

2. Start the server:
   ```
   cd server
   node server.js
   ```

3. In a new terminal, start the client:
   ```
   cd client
   npm start
   ```

### Usage

- Use the Add Student form to add new students to the attendance system.
- View the list of students and their attendance records.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.