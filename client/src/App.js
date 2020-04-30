import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <h1><center>Hello Group 2!</center></h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;