
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";



function Login() {
 

  

  return (
   
      <div className="container-fluid bg-info justify-content-center d-md-flex p-5 ">
        <div className=" col-md-12  align-item-center p-5   ">
          <Form className="  " >
            <Form.Group
              as={Row}
              className="mb-3  "
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                 
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3 "
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="password"
                  placeholder="Password"
                
                /> 
                
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalCheck"
            >
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 ">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button variant="success" type="submit">
                  Sign in
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
  
  );
}

export default Login;
