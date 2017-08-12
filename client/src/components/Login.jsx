import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {

    // constructor(){
    //     super();
    //     this.props = {
    //         user: {
    //             userName: '',
    //             email: '',
    //         },
    //         redirect: false,
    //     }
    // }

    // componentWillMount(){
    //     axios.get('/api/users').then(res => {
    //     this.setprops({
    //         user: res.data.userName,
    //         user: res.data.email,
    //         })
    //     console.log(res.data);
    //     });
    // }

    _handleChange = e => {
        this.setState({ 
            userName: e.target.value,
            });
    };

    _handleSubmit = e => {
        e.preventDefault();
        console.log('button click');
        axios
            .post("/api/users", { userName: this.props.username })
            .then(res => {
                console.log('logged in');
                console.log(res.data);
                this.setprops({ id: res.data._id });
            });
    };

    render() {
        return (
            <div>
               <form onSubmit={this._handleSubmit}>
                <input onChange={this._handleChange} value={this.props.userName} type="text" placeholder="username"/><br/>
                <input onChange={this._handleChange} value={this.props.email} type="email" placeholder="email"/><br/>
                <button>LOG IN</button>
               </form>
            <br/>
            <br/>
            <br/>
               <form onSubmit={this._handleSubmit}>
                <input onChange={this._handleChange} value={this.props.userName} type="text" placeholder="username"/><br/>
                <input onChange={this._handleChange} value={this.props.email} type="email" placeholder="email"/><br/>
                <input onChange={this._handleChange} value={this.props.password} type="text" placeholder="password"/><br/>
                <input onChange={this._handleChange} value={this.props.pasword} type="text" placeholder="password"/><br/>
                <button>SIGN UP</button>
               </form>
            </div>
        )
    }
}

export default Login;