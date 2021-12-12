import React from "react";
import Login from "./Components/Login";
import alakazim from "../Images/Alakazam_1.png";
import VtSeparator from "./Components/VtSeparator";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function UserLogin() {
  return (
    <div className="homeDiv">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ paddingLeft: 25 }} href="/">
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
      <div
        style={{
          height: "400px",
          width: "400px",
          display: "flex",
          margin: "auto",
          marginTop: "250px",
          marginBottom: "250px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          boxShadow: "10px 10px 15px gray",
          backgroundColor: "rgba(12, 12, 12, 0.85)",
        }}
      >
        <p style={{ fontFamily: "segoe UI", color: "white", fontSize: 20 }}>
          Please sign in with your google account:
        </p>
        <VtSeparator />
        <div
          style={{
            borderRadius: "5px",
            padding: "20px",
            height: "200px",
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#F5F5DC",
          }}
        >
          <img src={alakazim} style={{ width: "250px", alignSelf: "center" }} />
          <h5
            style={{
              textAlign: "center",
              fontFamily: "Segoe UI",
              marginBottom: "35px",
            }}
          >
            Admin Login
          </h5>
          <VtSeparator />
          <VtSeparator />

          <Login />
        </div>
        <VtSeparator />
        <VtSeparator />

        <a style={{ color: "white" }} href="/">
          Back to Home
        </a>
      </div>
    </div>
  );
}
