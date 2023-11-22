import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSignInAlt } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Navbs() {
  const {cart}   = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar expand="lg" className=" shadow-sm bg-light py-3">
        <Container>
          <Navbar.Brand
            href="#"
            className="fw-bold fs-1 font-family-mono text-danger"
          >
            KoKo-<span className=" text-warning">collection</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/KoKo/">
                
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/Product">
                Product
              </Nav.Link>
              <Nav.Link as={Link} to="About">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="Contact">
                Contact
              </Nav.Link>
            </Nav>

            <Button variant="outline-success  " as={Link} to="LogIn">
              <FaSignInAlt /> LogIn
            </Button>
            <Button variant="outline-success ms-2" as={Link} to="Registration">
              
              <BsFillPersonPlusFill /> Register
            </Button>
            <Button variant="outline-success ms-2" as={Link} to="Cart">
          
              <BsFillCartCheckFill /> Cart <span className="text-danger fw-bold"> {cart?.length}</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Navbs;
