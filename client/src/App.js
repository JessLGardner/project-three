import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/users" component={UserList}/>
          <br/>
        </div>
      </Router>
    );
  }
}

export default App;
