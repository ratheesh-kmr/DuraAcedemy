import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import Register from './components/Register';
import CourseList from './components/Courselist';
import CourseDetail from './components/CourseDetail';
import Assessment from './components/Assessment';
import UnderDevelopment from './components/UnderDevelopment';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/assessment/:courseId" element={<Assessment />} />
        <Route path="/courses/:id/assessment" element={<Assessment />} />
        <Route path="/career-support" element={<UnderDevelopment />} />
        <Route path="/success-stories" element={<UnderDevelopment />} />
        <Route path="/enterprise" element={<UnderDevelopment />} />
        <Route path="/for-recruiters" element={<UnderDevelopment />} />
        <Route path="/more" element={<UnderDevelopment />} />
      </Routes>
    </Router>
  );
};

export default App;
