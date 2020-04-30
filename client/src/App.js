import React from 'react';
import "./App.scss";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar fixed="top" className='bg-info'/>
      <Wrapper>
      <div className="container">
        <h2 className="text-center"><img src="./images/unlock.gif" width="150px"/>&emsp;Hello Group 2!</h2>
      </div>
      </Wrapper>
      <Footer fixed="bottom"/>
    </div>
  );
}

export default App;