import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
                        console.log(user);
                        return <User {...user} itinView={this.state.itinView} key={i} toggleItin={toggleItin}/>
                    })

        return (
            <div>
                <br/>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <br/>
                    <br/>
                    {UserComponent}  
                    <br/>    
                </div>
            </div>
        );
    }
}

export default UserList;

