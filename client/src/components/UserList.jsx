import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class UserList extends Component {
    render() {
        return (
            <div>
                <div>
                    UserList<br/>
                    UserList<br/>
                    UserList<br/>
                    UserList<br/>
                </div>
                <div>
                    <Link to="/">Home</Link>
                </div>
            </div>
        );
    }
}

export default UserList;