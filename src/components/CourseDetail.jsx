import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/courses';
import '../styles/CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  return course ? (
    <div className="course-detail-container">
      <div className="course-header">
        <div className="course-text">
          <p className="course-tag">PG Program in {course.category}</p>
          <h1 className="course-title">
            Build a successful career in {course.title}
          </h1>
          <p className="course-description">{course.description}</p>

          <div className="cta-buttons">
            <button className="brochure-btn">Download Brochure</button>
            <Link to={`/courses/${id}/assessment`}>
              <button className="assessment-btn">Take Assessment</button>
            </Link>
          </div>

          <p className="deadline-warning">
            ⚠️ Application closes on <span className="highlight">20th May 2025</span>
          </p>

          <div className="course-features">
            <div><strong>{course.rating} ⭐</strong><p>{course.ratings} ratings</p></div>
            <div><strong>{course.duration} Months</strong><p>program duration</p></div>
            <div><strong>Hands-On</strong><p>Real-world case studies</p></div>
            <div><strong>Live Mentorship</strong><p>from industry professionals</p></div>
          </div>
        </div>

        <div className="course-image">
          <img src="../assets/university_building.jpg" alt="University Building" />
          <button className="play-button">▶ Play Video</button>
        </div>
      </div>
    </div>
  ) : (
    <p>Course not found</p>
  );
};

export default CourseDetail;
