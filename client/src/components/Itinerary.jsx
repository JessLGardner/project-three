import React, { Component } from 'react';
import axios from 'axios';
import Event from './Event';


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

        const EventComponent = this.state.itinerary.events.map((event, i)=>{
            console.log(event);
            return <Event {...event} key={i}/>
        })


        return (
            <div>
                Itinerary Name: {this.state.itinerary.name}<br/>
                <br/>
                 {EventComponent}  

                (delete itin from here)<br/>
                (edit itin from here)<br/>
                <br/>
            </div>
        );
    }
}

export default Itinerary;