import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {FooterStyle} from './styles/Styles';
import Home from './components/Home';
import UserList from './components/UserList';
import ItineraryList from './components/ItineraryList';
import Itinerary from './components/Itinerary';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/users" component={UserList}/>
                    <Route exact path="/users/:userId/itinerary" component={ItineraryList}/>
                    <Route exact path="/users/:userId/itinerary/:itineraryId" component={Itinerary}/> 
                    <FooterStyle>
                        <small>© 2017 Jess Gardner</small>
                    </FooterStyle>
                </div>
            </Router>
        );
    }
}

export default App;
