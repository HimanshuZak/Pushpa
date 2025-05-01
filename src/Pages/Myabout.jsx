// src/pages/About.jsx
// About.jsx
import React from 'react';
import './About.css'; // Custom styling (optional)

const Myabout = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-success text-light text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold power">Empowering Minds, Shaping Futures</h1>
          <p className="lead mt-3 ">We are not just an educational platform — we are a movement to make learning meaningful, modern, and magical.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="https://computerguru.co.in/wp-content/uploads/2023/10/Computer-Guru-Training-Institute-Rishikesh.png" className="img-fluid rounded shadow" alt="Our Journey" />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Our Journey</h2>
            <p>We started with a single goal: to make quality education accessible to all. From a small idea to a global learning community, we've evolved to include interactive courses, hands-on projects, and expert mentorship — all built with love and technology.</p>
            <ul className="list-unstyled">
              <li>📅 Founded in 2020</li>
              <li>🌍 500+ Students </li>
              <li>🏆 100+ Industry-Aligned Courses</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">What We Stand For</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-lightbulb fs-1 text-warning"></i>
                <h5 className="mt-3">Innovation</h5>
                <p>We blend creativity with technology to deliver immersive learning experiences.</p>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-people fs-1 text-primary"></i>
                <h5 className="mt-3">Community</h5>
                <p>We believe in the power of learners helping learners — together, we grow.</p>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="p-4 shadow-sm rounded bg-white h-100">
                <i className="bi bi-award fs-1 text-success"></i>
                <h5 className="mt-3">Excellence</h5>
                <p>Our courses are built by experts and constantly refined for real-world success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center text-white bg-primary py-5">
        <div className="container">
          <h2 className="fw-bold">Join the Learning Revolution</h2>
          <p className="mb-4">Whether you're a student, professional, or lifelong learner — there's a place for you here.</p>
          <a href="/courses" className="btn btn-light px-4 py-2 fw-bold">Explore Courses</a>
        </div>
      </section>
    </div>
  );
};

export default Myabout;
