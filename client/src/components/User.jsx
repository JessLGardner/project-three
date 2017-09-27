import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UserInfo from './UserInfo';
import axios from 'axios';
import ItineraryList from './Itinerary';
import {Button2} from '../styles/Styles';
import {TextStyle} from '../styles/Styles';
import {UserStyle} from '../styles/Styles';



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
            <UserStyle>
                <br/>
                <TextStyle>{this.props.userName}</TextStyle>
                <img src={this.props.avatar} alt="user avatar"/><br/>
                <Button2 onClick={this.props.toggleItin}>{this.props.itinView ? 'HIDE USER INFO' : 'SEE USER INFO' }</Button2>
                    {this.props.itinView ? <UserInfo {...this.props}/> : ''} <br/>  
                <br/>
                <br/>
                
            </UserStyle>
        );
    }
}

export default User;   