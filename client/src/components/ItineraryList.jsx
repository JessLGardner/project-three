import React, { Component } from 'react';
import Itinerary from './Itinerary';
import axios from 'axios';


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
        console.log(this.props)
        const userId =  this.props.match.params.userId
        axios.get(`/api/users/${userId}/itinerary`).then(res => {
            this.setState({user: res.data})
        });
    }

    render() {

    const ItineraryComponent = this.state.user.itineraries.map((itinerary, i)=>{
                        console.log(itinerary);
                        return <Itinerary {...itinerary} key={i}/>
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