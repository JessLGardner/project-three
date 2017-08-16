import React, { Component } from 'react';
import axios from 'axios';
import Event from './Event';
import {NavBarStyle} from '../styles/Styles';
import {Link} from 'react-router-dom';
import {UserListStyle} from '../styles/Styles';




class Itinerary extends Component {
        constructor(){
        super();
        this.state = {
            itinerary: {
                events: []
            }
        }
    }

    componentWillMount(){
        const userId =  this.props.match.params.userId
        const itineraryId =  this.props.match.params.itineraryId
        // console.log("ITIN ID:", itineraryId );
        axios.get(`/api/users/${userId}/itinerary/${itineraryId}`).then(res => {
            console.log(res.data);
            this.setState({itinerary: res.data})
        });
    }

    render() {
        const userId =  this.props.match.params.userId
        const itineraryId =  this.props.match.params.itineraryId

        const EventComponent = this.state.itinerary.events.map((event, i)=>{
            console.log(event);
            return <div><Event {...event} key={i}/><br/></div>
        })


        return (
            <div>
                <NavBarStyle>
                    <div>
                        <p className="TextStyle2">Itinerary : {this.state.itinerary.name}</p>
                    </div>
                    <div>
                        <Link to={`/users`}>{`back to users`}</Link> 
                        {/* <Link to={`/users/${userId}/itinerary`}>{`back to ${userId}'s itineraries`}</Link> */}
                        <Link to="/"><small>HOME</small></Link>
                    </div>
                </NavBarStyle>
                <div>
                    <br/>
                    {EventComponent}  

                    <br/>
                </div>
            </div>
        );
    }
}

export default Itinerary;