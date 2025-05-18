import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { assessment } from '../data/assessment';

const Assessment = () => {
  const { id } = useParams();
  const quiz = assessment[id];
  const [score, setScore] = useState(null);

  // Add a check to see if the quiz data exists
  if (!quiz) {
    return (
      <div style={{
        backgroundColor: '#f9fafb', // Light background
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        color: '#6b7280', // Gray text
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        lineHeight: '1.5',
      }}>
        <h2 style={{
          color: '#dc2626', // Red
          marginBottom: '16px',
          fontWeight: '600',
          fontSize: '1.5rem',
        }}>Quiz Not Found!</h2>
        <p>Sorry, the quiz you are looking for could not be found.  Please check the URL or try a different quiz.</p>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let points = 0;
    quiz.forEach((q, index) => {
      const selected = parseInt(e.target[`q${index}`].value);
      if (selected === q.answer) points++;
    });
    setScore(points);
  };

  return (
    <div style={{
      backgroundColor: '#f9fafb', // Light background
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)', // Subtle shadow
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"', // Modern font
      lineHeight: '1.5', // Improved line height
    }}>
      <h2 style={{
        color: '#4f46e5', // A shade of purple, for a modern feel
        marginBottom: '24px',
        fontWeight: '600', // Make the heading bold
        fontSize: '2rem', // Larger font size for heading
      }}>Assessment</h2>
      {score !== null ? (
        <div style={{
          backgroundColor: '#eff6ff', // Very light blue for score background
          padding: '16px',
          borderRadius: '6px',
          marginBottom: '24px',
          border: '1px solid #d1d8f3', // Light border
          textAlign: 'center',
        }}>
          <h3 style={{
            color: '#1e293b', // Darker text for better contrast
            fontWeight: '500', // Medium font weight
            fontSize: '1.25rem',
          }}>Your Score: <span style={{ color: '#10b981', fontWeight: '600' }}>{score}</span>/{quiz.length}</h3> {/* Green for the score */}
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}> {/* Centering the form */}
          {quiz.map((q, index) => (
            <div key={index} style={{
              marginBottom: '24px',
              padding: '20px',
              backgroundColor: 'white', // White background for question cards
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.08)', // Lighter shadow
              border: '1px solid #e5e7eb', // Very light border
            }}>
              <p style={{
                color: '#374151', // Dark grey for question text
                marginBottom: '16px',
                fontSize: '1.1rem', // Slightly larger question text
                fontWeight: '500',
              }}>{q.q}</p>
              {q.options &&
                q.options.map((opt, i) => (
                  <label
                    key={i}
                    style={{
                      display: 'block',
                      marginBottom: '12px', // Increased margin
                      cursor: 'pointer', // Make label clickable
                      padding: '12px', // Padding for each option
                      borderRadius: '6px', // Rounded corners for options
                      backgroundColor: '#f8fafc', // Light background for options
                      transition: 'background-color 0.2s ease, border-color 0.2s ease', // Smooth transition
                      border: '1px solid #f1f5f9',
                      '&:hover': { // Hover effect for options
                        backgroundColor: '#edf2f7', // Slightly darker on hover
                        borderColor: '#d1d5db',
                      },
                      '& input': {
                        marginRight: '12px', // Space between radio and text
                      },
                      color: '#4b5563', // Darker text for options
                      fontSize: '1rem',
                    }}
                  >
                    <input type="radio" name={`q${index}`} value={i} required style={{
                      marginRight: '8px',
                      cursor: 'pointer',
                    }} />
                    {opt}
                  </label>
                ))}
              {!q.options && <p style={{ color: 'red' }}>Error: Options not provided for this question.</p>}
            </div>
          ))}
          <button type="submit" style={{
            marginTop: '24px',
            padding: '12px 24px',
            backgroundColor: '#4f46e5', // Purple button
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1.1rem',
            transition: 'background-color 0.2s ease, box-shadow 0.2s ease', // Smooth transition
            width: '100%', // Full width button
            maxWidth: '320px', // Maximum width
            margin: '0 auto', // Center the button
            display: 'block',
            '&:hover': {
              backgroundColor: '#4338ca', // Darker purple on hover
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)', // Add a shadow on hover
            },
            '&:active': {
              backgroundColor: '#3730a3', // Even darker purple on active
              boxShadow: '0 1px 2px rgba(0,0,0,0.2)', // Smaller shadow on active
            }
          }}>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Assessment;
