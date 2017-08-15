import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserInfo from './UserInfo';
import axios from 'axios';
import ItineraryList from './Itinerary';

class User extends Component {

    constructor(){
        super();
        this.state = {
            users: [],
            // itinView: false
        }
    }

    componentWillMount(){
        axios.get(`/api/users/${this.props._id}`).then(res => {
            this.setState({users: res.data})
        });
    }
    
    render() {

        return (
            <div>
                Username: {this.props.userName}<br/>
                email: {this.props.email}<br/>
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