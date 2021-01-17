import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import "./App.css";
import { globalConstants } from "./constants/global";
import { Dashboard } from "./containers/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-header">{globalConstants.APP_TITLE}</h1>
        <Container fluid>
          <Dashboard />
          <div>
            <h5 className="App-developer-name">Developed by : Soumik Paul</h5>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
