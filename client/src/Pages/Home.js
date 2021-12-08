import { useHistory } from "react-router-dom";
import alakazim from "../Images/Alakazam_1.png";
import pythonlogo from "../Images/pythonlogo.jpg";
import face from "../Images/FaceRecognition.png";
import firebaseimg from "../Images/firebaseimg.jpg";
import reactimg from "../Images/reactimg.png";
import "./styles.css";
import Login from "./Components/Login";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import HzSeparator from "./Components/HzSeparator";
import VtSeparator from "./Components/VtSeparator";

export default function Home() {
  return (
    <div className="homeDiv">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ paddingLeft: 25 }} href="home">
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="UserLogin" style={{ paddingRight: 25 }}>
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
          <p style={{ fontSize: "300%", fontFamily: "Segoe UI" }}>ALA-KAZIM</p>
          <p>An easier way to track student attendance.</p>
        </div>
      </div>
      <br />
      <br />
      <div className="center-div">
        <p style={{ fontFamily: "Segoe UI", fontSize: 35, marginTop: -10 }}>
          TECHNOLOGIES
        </p>
      </div>
      <p
        className="center-div"
        style={{ fontSize: 21, marginTop: -25, textAlign: "center" }}
      >
        Along with the Nvidia&reg; Jetson Nano and the implementation of facial
        recognition,
        <br />
        some other technologies used in the creation of this application
        include:
      </p>
      <div className="homeImgsDiv">
        <div>
          <a href="https://reactjs.org/">
            <img className="homeImgs" src={reactimg} />
          </a>
          <VtSeparator />
          <h2 style={{ fontSize: 25 }} className="center-div">
            React
          </h2>
        </div>
        <HzSeparator />
        <div>
          <a href="https://www.python.org/">
            <img className="homeImgs" src={pythonlogo} />
          </a>
          <VtSeparator />
          <h2 style={{ fontSize: 25 }} className="center-div">
            Python
          </h2>
        </div>
        <HzSeparator />
        <div>
          <a href="https://firebase.google.com/">
            <img className="homeImgs" src={firebaseimg} />
          </a>
          <VtSeparator />
          <h2 style={{ fontSize: 25 }} className="center-div">
            Firebase
          </h2>
        </div>
        {/* <Card style={{ width: "18rem", boxShadow: "10px 10px 9px grey" }}>
          <Card.Img
            variant="top"
            src={clock}
            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Saves Time</Card.Title>
            <Card.Text>
              Once a student image is captured, their attendance status is
              immediately sent to a csv file.
            </Card.Text>
          </Card.Body>
        </Card>
        <HzSeparator />

        <Card style={{ width: "18rem", boxShadow: "10px 10px 9px grey" }}>
          <Card.Img
            variant="top"
            src={graph}
            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>Data Collection</Card.Title>
            <Card.Text>
              Statistics of attendance can quickly be displayed visually after
              each class period.
            </Card.Text>
          </Card.Body>
        </Card>
        <HzSeparator />

        <Card style={{ width: "18rem", boxShadow: "10px 10px 9px grey" }}>
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
          </Card.Body>
        </Card> */}
      </div>
    </div>
  );
}
