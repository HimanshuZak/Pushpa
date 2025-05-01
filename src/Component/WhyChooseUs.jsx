import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaChalkboardTeacher, FaLaptopCode, FaAward, FaUserGraduate } from 'react-icons/fa'

const features = [
  {
    icon: <FaChalkboardTeacher />,
    title: 'Expert Faculty',
    description: 'Learn from experienced instructors with real-world expertise.',
    
  },
  {
    icon: <FaLaptopCode />,
    title: 'Practical Training',
    description: 'Hands-on labs and live projects to sharpen your skills.',
  },
  {
    icon: <FaAward />,
    title: 'Certified Courses',
    description: 'Get industry-recognized certifications that matter.',
  },
  {
    icon: <FaUserGraduate />,
    title: 'Placement Support',
    description: 'Strong industry tie-ups for job opportunities post training.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      style={{
        // background: 'linear-gradient(120deg, #f8f9fa, #e6ecff)',
        padding: '60px 0',
      }}
    >
      <Container>
        <h2 className="text-center fw-bold mb-5 text-primary mt-5">Why Choose Computer Guru Institute?</h2>
        <Row className="g-4">
          {features.map((item, index) => (
            <Col key={index} md={6} lg={3}>
              <Card className="h-100 text-center border-0 shadow-sm rounded-4 p-3 feature-card">
                <div className="fs-1 text-primary mb-3">{item.icon}</div>
                <Card.Title className="fw-bold fs-5">{item.title}</Card.Title>
                <Card.Text className="small text-muted">{item.description}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
