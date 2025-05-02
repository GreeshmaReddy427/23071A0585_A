# Student Attendance Tracker

This project is a MERN (MongoDB, Express, React, Node.js) application designed for tracking student attendance. It allows users to add students, view a list of enrolled students, and check attendance records.

## Project Structure

```
student-attendance-tracker
├── client                # React frontend
│   ├── public
│   │   └── index.html    # Main HTML file for the React application
│   ├── src
│   │   ├── components
│   │   │   ├── AddStudent.jsx      # Component for adding new students
│   │   │   ├── StudentList.jsx      # Component for displaying the list of students
│   │   │   └── AttendanceRecord.jsx  # Component for showing attendance records
│   │   ├── App.jsx          # Main component of the React application
│   │   ├── index.js        # Entry point for the React application
│   │   └── styles
│   │       └── App.css     # CSS styles for the React application
│   ├── package.json        # Configuration file for the client-side application
│   └── README.md           # Documentation specific to the client-side application
├── server                  # Node.js/Express backend
│   ├── controllers
│   │   └── studentController.js  # Functions for handling student-related requests
│   ├── models
│   │   └── Student.js      # Mongoose model for student data
│   ├── routes
│   │   └── studentRoutes.js # Routes for handling student-related API requests
│   ├── server.js           # Entry point for the Node.js/Express server
│   ├── package.json        # Configuration file for the server-side application
│   └── README.md           # Documentation specific to the server-side application
└── README.md               # Overall project documentation
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
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the MongoDB server.

2. Start the backend server:
   ```
   cd server
   node server.js
   ```

3. Start the frontend application:
   ```
   cd ../client
   npm start
   ```

### Usage

- Use the Add Student form to add new students to the attendance system.
- View the list of enrolled students and their attendance records.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.