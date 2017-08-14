import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserInfo from './UserInfo';

class User extends Component {
    
    
    render() {

        return (
            <div>
                Username: {this.props.userName}<br/>
                <img src={this.props.avatar} alt="user avatar"/><br/>
                <button onClick={this.props.toggleItin}>{this.props.itinView ? 'HIDE USER INFO' : 'SEE USER INFO' }</button>
                    {this.props.itinView ? <UserInfo {...this.props}/> : ''} <br/>  
                <br/>
                <br/>
                
            </div>
        );
    }
}

export default User;   