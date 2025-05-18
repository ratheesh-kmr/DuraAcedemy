import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from '../data/courses'; // Ensure your data matches the shape expected
import '../styles/coursecard.css';

const CourseList = ({ onCourseSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('title'); // 'title' or 'duration'

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredCourses =
    selectedCategory === 'all'
      ? [...courses]
      : courses.filter((course) => course.category === selectedCategory);

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'duration' && a.duration && b.duration) {
      return a.duration - b.duration;
    }
    return 0;
  });

  const handleSelectCourse = (courseId) => {
    onCourseSelect(courseId);
  };

  const categories = ['all', ...new Set(courses.map((course) => course.category).filter(Boolean))];

  return (
    <div className="course-list-container great-learning-theme" data-theme="light">
      <h2 className="course-heading">Explore Our Programs</h2>

      <div className="filter-sort-controls">
        <div className="filter-control">
          <label htmlFor="category">Filter by Category:</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        <div className="sort-control">
          <label htmlFor="sort">Sort By:</label>
          <select id="sort" value={sortBy} onChange={handleSortChange}>
            <option value="title">Title</option>
            {courses.some((course) => course.duration) && (
              <option value="duration">Duration</option>
            )}
          </select>
        </div>
      </div>

      <div className="course-grid">
        {sortedCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p className="course-description">{course.description}</p>
            {course.duration && (
              <p className="course-duration">Duration: {course.duration} hours</p>
            )}
            {course.level && <p className="course-level">Level: {course.level}</p>}
            <div className="course-actions">
              {/* <button className="select-button" onClick={() => handleSelectCourse(course.id)}>
                Enroll Now
              </button> */}
              <Link to={`/courses/${course.id}`} className="view-details-link">
                View Details
              </Link>
            </div>
          </div>
        ))}
        {sortedCourses.length === 0 && (
          <p className="no-courses">No courses found in the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
