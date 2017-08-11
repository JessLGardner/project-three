import React, { Component } from 'react';
import ItineraryList from './ItineraryList';

class User extends Component {
    render() {
        return (
            <div>
                <p>This is a single user!</p><br/>
                <ItineraryList/>
            </div>
        );
    }
}

export default User;