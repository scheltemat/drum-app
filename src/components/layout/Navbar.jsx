import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function ColorSchemesExample() {
  return (
    <>
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home" className='navbar-brand'>OnBeat: a Drummer's App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id='navbar-toggle' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id="navbar-links">

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/exercises">Exercises</Nav.Link>
            <Nav.Link as={Link} to="/practice">Go To Practice</Nav.Link>
            <Nav.Link as={Link} to="/">Learn More</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default ColorSchemesExample;