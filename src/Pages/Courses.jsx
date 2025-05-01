// CoursePage.jsx
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Courses.css'
const courses = [
  {
    id: 1,
    title: 'Tally with GST',
    description: 'TallyPrime is a widely used accounting software in India that simplifies business management',
    image: 'https://img.freepik.com/premium-vector/gst-goods-service-tax-with-big-words-people-team-business-with-modern-isometric-flat_82472-129.jpg?ga=GA1.1.1137574544.1739352703&semt=ais_hybrid&w=740',
  },
  {
    id: 2,
    title: 'Full-Stack Web Dev',
    description: 'HTML, CSS, JavaScript, React, Node.js — from zero to hero!',
    image: 'https://img.freepik.com/free-vector/coding-workshop-concept-illustration_114360-8192.jpg?ga=GA1.1.1137574544.1739352703&semt=ais_hybrid&w=740',
  },
  {
    id: 3,
    title: 'Data Science & ML',
    description: 'Data analysis, visualization, and machine learning models.',
    image: 'https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-robotic-hand-machine-learning-cyber-mind-domination-concept_127544-852.jpg?ga=GA1.1.1137574544.1739352703&semt=ais_hybrid&w=740',
  },

  // {
  //   id: 4,
  //   title: 'Graphic & Web Designing',
  //   description: 'Aquaring attracting UI',
  //   image : 'https://img.freepik.com/free-vector/abstract-floral-web-banner-background-vector-illustration_460848-12878.jpg?ga=GA1.1.1137574544.1739352703&semt=ais_hybrid&w=740'


  // }
];

const CourseCard = ({ course }) => (
  <div className="col-md-4 mb-4">
    <div className="card course-card shadow-lg border-0 h-100">
      <img src={course.image} className="card-img-top" alt={course.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{course.title}</h5>
        <p className="card-text text-muted">{course.description}</p>
        <button className="btn btn-outline-light mt-auto w-100">
          <i className="bi bi-arrow-right-circle me-2"></i> Explore Course
        </button>
      </div>
    </div>
  </div>
);

const CoursePage = () => {
  return (
    <div className="course-page">
      <div className="container py-5">
        <h2 className="text-center text-white mb-5 display-5 fw-bold">🚀 Explore Our Courses</h2>
        <div className="row">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
