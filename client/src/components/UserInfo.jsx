import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Itinerary from './Itinerary';


class UserInfo extends Component {
    render() {

        return (
            <div>
                email: {this.props.email}<br/>
                <Link to={{
                    pathname:`/users/${this.props._id}/itinerary`,
                }}>See Itineraries</Link>
            </div>
        );
    }
}

export default UserInfo;

