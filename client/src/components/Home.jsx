import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {HomeStyle} from '../styles/User'


class Home extends Component {

    render() {

        return (
        <HomeStyle>

            <br/>  
            <p>HOME HOME HOME</p>
            <br/>
            <br/> 
                <div>
                    <p><Link to="/users">Enter</Link></p>
                </div>
        </HomeStyle>
        );
    }
}

export default Home;