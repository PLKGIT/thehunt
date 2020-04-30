import React from 'react';
import "./App.scss";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <h1 class="text-center">Hello Group 2!</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;