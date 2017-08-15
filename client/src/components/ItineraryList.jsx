import React, { Component } from 'react';
import Itinerary from './Itinerary';
import axios from 'axios';
import {Link} from 'react-router-dom';


class ItineraryList extends Component {

    constructor(){
        super();
        this.state = {
            user: {
                itineraries: []
            }
        }
    }

    componentWillMount(){
        const userId =  this.props.match.params.userId
        console.log("USER ID:", userId );
        axios.get(`/api/users/${userId}/itinerary`).then(res => {
            this.setState({user: res.data})
        });
    }

    render() {

    const ItineraryComponent = this.state.user.itineraries.map((itinerary, i)=>{
        // return <Itinerary {...itinerary} key={i}/>                
        console.log(itinerary._id)
        return <Link to={{pathname:`/users/${this.props._id}/itinerary/${itinerary._id}`}}>See what's happening!</Link>
        })

        return (
            <div>
                 {ItineraryComponent} 
                 create new itin
            </div>
        );
    }
}

export default ItineraryList;