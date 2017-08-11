import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import User from './User';


class UserList extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>This is a user list!</p><br/>
                    <User/>
                </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}

export default UserList;