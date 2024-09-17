import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Menu(prop) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to={prop.link1} className="mb">{prop.principal}</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={prop.link2} className="mb">{prop.secundario}</Link></Nav.Link>
            <Nav.Link><Link to={prop.link3} className="mb">{prop.tercero}</Link></Nav.Link>
            <NavDropdown title="Sing in" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to={prop.link4} className="mb">{prop.cuarto}</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to={prop.link5} className="mb">{prop.quinto}</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

//    <div>
//        <nav>
//         <ul>
//             <li>
//                 <Link to="/">Inicio</Link>
//             </li>
//             <li>
//                 <Link to="/contact">Contactenos</Link>
//             </li>
//             <li>
//                 <Link to="/us">Nosotros</Link>
//             </li>
//             <li>
//                 <Link to="/login">Registro</Link>
//             </li>
//         </ul>
//        </nav>
    
//    </div>
  )
}

export default Menu