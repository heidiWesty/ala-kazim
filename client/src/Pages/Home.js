import { useHistory } from "react-router-dom";
import alakazim from "../Images/Alakazam_1.png";
import datapic from "../Images/data.jpg";
import face from "../Images/FaceRecognition.png";
import graph from "../Images/graph.jpg";
import purple from "../Images/purple.jpg";
import "./styles.css";
import Login from "./Components/Login";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <div className="homeDiv">
      <Navbar bg="dark" variant="dark">
        <Container style={{ paddingLeft: 20 }}>
          <Navbar.Brand href="home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="attendance">Attendance</Nav.Link>
            <Nav.Link href="Admin">Admin</Nav.Link>
          </Nav>
        </Container>
        <Nav>
          <Nav.Link href="UserLogin" style={{ paddingRight: 20 }}>
            Login
          </Nav.Link>
        </Nav>
      </Navbar>
      <div style={{ position: "relative" }}>
        <img
          src={face}
          style={{
            height: 400,
            width: "100%",
            objectFit: "cover",
          }}
        />
        <div className="text-block">
          <p style={{ fontSize: "300%" }}>Ala-Kazim</p>
          <p>We put the 'AI' in Kazim</p>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          width: 1000,
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={purple}
            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <div style={{ marginRight: 30, marginLeft: 30 }}></div>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={datapic}
            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <div style={{ marginRight: 30, marginLeft: 30 }}></div>

        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={graph}
            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <Login />
    </div>
  );
}
