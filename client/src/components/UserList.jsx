import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {UserListStyle} from '../styles/Styles';
import {FlexStyle} from '../styles/Styles';
import {NavBarStyle2} from '../styles/Styles';
import User from './User';
import axios from 'axios';


class UserList extends Component {

    constructor(){
        super();
        this.state = {
            users: [],
            itinView: false
        }
    }

    componentWillMount(){
        console.log('test this')
        axios.get('/api/users').then(res => {
        
            this.setState({users: res.data})
        });
    }

    _toggleItinerary = () => {
        const itinView = !this.state.itinView;
        this.setState({itinView});
    };

    render() {
    const toggleItin = this._toggleItinerary;

    const UserComponent = this.state.users.map((user, i)=>{
                        // console.log(user);
                        return <User {...user} itinView={this.state.itinView} key={i} toggleItin={toggleItin}/>
                    })

        return (
            <div>
                <NavBarStyle2>
                    <div>
                        <Link to="/"><small>HOME</small></Link>
                    </div>
                </NavBarStyle2>
            <FlexStyle>
                <UserListStyle>
                    <div>
                        <br/>
                        <br/>
                        {UserComponent}  
                        <br/>    
                    </div>
                </UserListStyle>
            </FlexStyle>
            </div>
        );
    }
}

export default UserList;

