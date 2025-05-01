// src/pages/Home.jsx
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Home.css'
import ImageSlider from '../Component/ImageSlider'
import { Link } from 'react-router-dom'
import WhyChooseUs from "../Component/WhyChooseUs";

export default function Home() {
  return (
     <>
        {/* 🔹 Image Slider at the top */}
           <ImageSlider />
           
      {/* 🔹 Hero section */}

      <WhyChooseUs/>
<div className="home-hero text-white mt-5 ">
      <div className="text-center py-5 ">
        <h1 className="display-4 fw-bold mb-3 animate-slide-in">Welcome to Computer Guru Institute</h1>
        <p className="lead mb-4 animate-fade-in">
          Your one-stop solution for online learning, skill development, and academic success.
        </p>
        <Link to={"/Courses"}>
        <Button variant="warning" size="lg" className="px-4 py-2 animate-fade-in">Explore Courses</Button>
        </Link>
      </div>

      <div className="mt-5">
        <Row className="text-center g-4">
          <Col md={4}>
            <div className="info-card">
              <h3>Expert Mentors</h3>
              <p>Learn from industry professionals and experienced teachers.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-card">
              <h3>Flexible Learning</h3>
              <p>Study at your own pace with our flexible course schedules.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-card">
              <h3>Certifications</h3>
              <p>Get recognized with certificates after successful completion.</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    </>
  )
}