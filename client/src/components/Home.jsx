import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Login from './Login';


class Home extends Component {

    constructor(){
        super();
        this.state = {
            user: {
                userName: '',
                email: '',
                password: '',
                avatar: '',
                itineraries: ''
            },
        }
    }

    componentWillMount(){
        axios.get('/api/users').then(res => {
        this.setState({
            user: res.data.userName,
            user: res.data.email,
            })
        console.log(res.data);
        });
    }

    render() {

        return (
        <div>
            HOME HOME HOME
            <br/>
            <br/>
            <div>
                <Login userName={this.state.userName}
                       email={this.state.email}
                       password={this.state.password}/>       
            </div> 
        </div>
        );
    }
}

export default Home;