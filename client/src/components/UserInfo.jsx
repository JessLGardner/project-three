import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Itinerary from './Itinerary';


class UserInfo extends Component {
    render() {

        return (
            <div>
                <p><small>EMAIL:</small> {this.props.email}</p>
                <p><small>USERNAME:</small> {this.props.userName}</p>
                <p><small>FIRST NAME:</small> {this.props.firstName}</p>
                <p><small>LAST NAME:</small> {this.props.lastName}</p>

                <Link to={{
                    pathname:`/users/${this.props._id}/itinerary`}}>
                    {`see ${this.props.userName}'s itineraries`}
                </Link>
            </div>
        );
    }
}

export default UserInfo;

