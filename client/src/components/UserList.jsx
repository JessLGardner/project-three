import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import User from './User';
import axios from 'axios';


class UserList extends Component {

    constructor(){
        super();
        this.state = {
            users: [],
            // user: {
            //     userName: '',
            //     email: '',
            //     password: '',
            //     avatar: '',
            //     itineraries: []
            // }
        }
    }

    componentWillMount(){
        axios.get('/api/users').then(res => {
            this.setState({users: res.data})
            console.log(this.state.users);
        });
    }

    render() {

    const UserComponent = this.state.users.map((user, i)=>{
                        console.log(user);
                        return <User {...user} key={i}/>
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
                    <p>This is a user list!</p><br/>
                          {UserComponent}      
                </div>
            </div>
        );
    }
}

// UserList.defaultState = {
//         users: []
//     }

export default UserList;
