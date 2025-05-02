# Student Attendance Tracker

This is a MERN (MongoDB, Express, React, Node.js) application for tracking student attendance. It allows users to add students, view a list of enrolled students, and check attendance records.

## Project Structure

The project is organized into two main directories: `client` and `server`.

### Client

The `client` directory contains the React application.

- **public/index.html**: The main HTML file for the React application.
- **src/components**: Contains React components for adding students, listing students, and displaying attendance records.
  - **AddStudent.jsx**: A form for adding new students.
  - **StudentList.jsx**: Displays a list of enrolled students.
  - **AttendanceRecord.jsx**: Shows attendance records for each student.
- **src/App.jsx**: The main component that renders the application.
- **src/index.js**: The entry point for the React application.
- **src/styles/App.css**: CSS styles for the application.
- **package.json**: Configuration file for the client-side application.

### Server

The `server` directory contains the Node.js/Express backend.

- **controllers/studentController.js**: Functions for handling requests related to student data.
- **models/Student.js**: Defines the Mongoose model for student data.
- **routes/studentRoutes.js**: Exports routes for handling student-related API requests.
- **server.js**: The entry point for the Node.js/Express server.
- **package.json**: Configuration file for the server-side application.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the server directory and install dependencies:
   ```
   cd server
   npm install
   ```

3. Navigate to the client directory and install dependencies:
   ```
   cd ../client
   npm install
   ```

### Running the Application

1. Start the MongoDB server.
2. Start the backend server:
   ```
   cd server
   npm start
   ```

3. Start the React application:
   ```
   cd client
   npm start
   ```

The application should now be running on `http://localhost:3000`.

## Usage

- Use the form in the Add Student component to add new students.
- View the list of students and their attendance records in the respective components.

## License

This project is licensed under the MIT License.