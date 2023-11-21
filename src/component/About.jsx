import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function About() {
  return (
    <div>
      <Row className="d-grid">
        <Col className="bg-primary rounded">
        <Card.Title className=" m-5 display-6 text-black "> Team</Card.Title>
        <Card.Text className=" m-5 ">
        React Bootstrap is maintained by a team of developers on Github.
         We have a growing team and if you are interested in re-building the most popular front-end framework with React we would love to hear from you.
      </Card.Text>
      <Card.Title className=" m-5 display-6 text-black "> Contributors</Card.Title>
      <Card.Text className=" m-5 ">
      We welcome community support with both feature and bug reporting. Please do not hesitate to jump in. Join our growing list of contributors.
    </Card.Text>
    <Card.Title className=" m-5 display-6 text-black "> Get Involved</Card.Title>
    <Card.Text className=" m-5 ">
    Get involved with React Bootstrap by opening an issue or submitting a pull request. See our contributing guidelines here.
  </Card.Text>
        </Col>
      </Row>
    </div>
  );
}

export default About;
