import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                HOME HOME HOME
                <div>
                    <Link to="/users">Users</Link>
                </div>
            </div>
        );
    }
}

export default Home;