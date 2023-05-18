import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
function NavBar () {
    return (<>
       <Navbar bg="dark" variant="dark">
        <Container>
  
          <Nav className="me-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favlist">favlist</Nav.Link>
       
          </Nav>
        </Container>
      </Navbar>
    </>)
}
export default NavBar;