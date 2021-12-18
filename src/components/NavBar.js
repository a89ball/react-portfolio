import React from 'react'
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'

const NavBar = () => {
    return (
    
 <Navbar collapseOnSelect  expand="lg" className="navbar navbar-expand-lg sticky fixed-top r-nav">
 <Navbar.Toggle />
 <Navbar.Collapse>
   <Nav className="navbar-nav ml-auto">
     <Nav.Item>
       <Nav.Link style={{fontSize: '15px', letterSpacing: '0.05em', marginLeft: '20px'}} className="nav-item"  as={Link} to="/">
         Home
       </Nav.Link>
     </Nav.Item>
     <Nav.Item>
        <Nav.Link style={{fontSize: '15px', letterSpacing: '0.05em', marginLeft: '20px'}} className="nav-item" eventKey="1" as={Link} to="/about">
        About
       </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link style={{fontSize: '15px', letterSpacing: '0.05em', marginLeft: '20px'}} className="nav-item" eventKey="1" as={Link} to="/projects">
         Portfolio
       </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link style={{fontSize: '15px', letterSpacing: '0.05em', marginLeft: '20px'}} className="nav-item"  as={Link} to="/skills">
         Skills
       </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link style={{fontSize: '15px', letterSpacing: '0.05em', marginLeft: '20px'}} className="nav-item"  as={Link} to="/contact">
         Contact
       </Nav.Link>
     </Nav.Item>
   </Nav>
 </Navbar.Collapse>
</Navbar>
 
    )
}

export default NavBar