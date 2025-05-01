import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(135deg,rgb(53, 89, 234),rgb(239, 124, 157))',
        color: 'white',
        paddingTop: '3rem',
        paddingBottom: '2rem',
      }}
      className="mt-5"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="mb-4 mb-md-0 text-center text-md-start">
            <img
              src="https://computerguru.co.in/wp-content/uploads/2023/11/Computer-Guru-Training-Institute-IDPL-Shyampur-Rishikesh-Uttarakhand.png"
              alt="Logo"
              height="60"
              className="mb-2"
            />
            <h5 className="fw-bold">Computer Guru Institute</h5>
            <p className="small">Empowering knowledge through quality education</p>
          </Col>

          <Col md={4} className="mb-4 mb-md-0 text-center">
            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
            {['Home', 'About', 'Courses', 'Contact', 'Gallery'].map((link, index) => (
              <NavLink
                key={index}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className="d-block text-white text-decoration-none mb-1"
                style={{ fontWeight: 500 }}
              >
                {link}
              </NavLink>
            ))}
          </Col>

          <Col md={4} className="text-center text-md-end">
            <h6 className="text-uppercase fw-bold mb-3">Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              {[
                { icon: <FaFacebookF />, link: 'https://facebook.com' },
                { icon: <FaInstagram />, link: 'https://instagram.com' },
                { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
                { icon: <FaYoutube />, link: 'https://youtube.com' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white fs-5"
                  style={{ transition: 'transform 0.3s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </Col>
        </Row>

        <hr className="border-light mt-4" />
        <p className="text-center mb-0 small">
          &copy; {new Date().getFullYear()} Computer Guru Institute. All Rights Reserved.
        </p>
      </Container>
    </footer>
  )
}
