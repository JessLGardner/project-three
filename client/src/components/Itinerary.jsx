import React, { Component } from 'react';
import axios from 'axios';
import Event from './Event';


class Itinerary extends Component {
    //do an axios call after component wil mount
    //make sure you're grabbing itinerary not user
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
        const itineraryId =  this.props.match.params.interaryId
        console.log("ITIN ID:", itineraryId );
        axios.get(`/api/users/${userId}/itinerary`).then(res => {
            this.setState({user: res.data})
        });
    }

    render() {

        const EventComponent = this.props.user.itineraries.events.map((event, i)=>{
                        console.log(event);
                        return <Event {...event} key={i}/>
                    })


        return (
            <div>
                Itinerary Name: {this.props.name}<br/>
                Events:<br/>
                 {EventComponent}  

                delete itin<br/>
                edit itin<br/>
                <br/>
            </div>
        );
    }
}

export default Itinerary;