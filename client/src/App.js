import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';
import ItineraryList from './components/ItineraryList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" component={UserList}/>
          <Route exact path="/users/:userId/itinerary" component={ItineraryList}/>
          <br/>
        </div>
      </Router>
    );
  }
}

export default App;
