import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Add from './components/addTank';
import TankDatabase from './components/tankDatabase';
import UpdateTankData from './components/updateTankData';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={{ backgroundColor: "#8F8F8F" }}>
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/"><img src="https://icon-library.net/images/world-of-tanks-icon-png/world-of-tanks-icon-png-29.jpg" alt="alt" height="25" width="25"></img></Nav.Link>
              <Nav.Link href="/tankdatabase">Tank Database</Nav.Link>
              <Nav.Link href="/add">Add a Tank</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            <Route path="/tankdatabase" component={TankDatabase} />
            <Route path="/add" component={Add} />
            <Route path="/update/:id" component={UpdateTankData}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;