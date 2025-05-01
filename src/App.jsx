import { Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './Pages/Home';  // Ensure the folder name is 'Pages'
import Myabout from './Pages/Myabout'
import Courses from './Pages/Courses';  // Ensure the folder name is 'Pages'
import Contact from './Pages/Contact';  // Ensure the folder name is 'Pages'
import Gallery from './Pages/Gallery';  // Ensure the folder name is 'Pages'
import Footer from './Component/Footer';  // Ensure the folder name is 'Component'
import './App.css';

export default function App() {
  return (
    <>
      <Navbar expand="lg" bg="light" variant="light" className="shadow-lg p-3 animated-navbar" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
            <img
              src='https://computerguru.co.in/wp-content/uploads/2023/11/Computer-Guru-Training-Institute-IDPL-Shyampur-Rishikesh-Uttarakhand.png'
              alt="Logo"
              height="50"
              className="me-2"
            />
            <span className="fw-bold fs-4 text-primary">Computer Guru</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto px-4 gap-4">
              <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              <Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>
              <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
              <Nav.Link as={NavLink} to="/gallery">Photo Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Myabout/>} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Container>

      <Footer />
    </>
  );
}
