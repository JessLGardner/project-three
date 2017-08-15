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
    const userId =  this.props.match.params.userId
    const ItineraryComponent = this.state.user.itineraries.map((itinerary, i)=>{
        // return <Itinerary {...itinerary} key={i}/>                
        console.log(`itinerary id ${JSON.stringify(itinerary)}`)
                    return <Link to={{
                    pathname:`/users/${userId}/itinerary/${itinerary._id}`}}>
                    {`see ${itinerary.name} itinerary`}
                </Link>
})

        return (
            <div>
                <br/>
                {ItineraryComponent}
                <br/>
                <br/>
                (create new itin from here)
            </div>
        );
    }
}

export default ItineraryList;