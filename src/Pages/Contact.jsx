import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
  return (
    <div className="container my-5">
      <div className="row shadow rounded bg-light">
        {/* Left Panel */}
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
          <h2 className="mb-4 text-primary">Get in Touch</h2>
          <p>Have a question or want to collaborate? We'd love to hear from you!</p>
          
          <div className="mt-4">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope-fill me-3 fs-4 text-secondary"></i>
              <span>contact@eduweb.com</span>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-telephone-fill me-3 fs-4 text-secondary"></i>
              <span>+91 98765 43210</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-geo-alt-fill me-3 fs-4 text-secondary"></i>
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-md-6 p-4 bg-white">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
