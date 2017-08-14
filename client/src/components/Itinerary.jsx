import React, { Component } from 'react';
import Event from './Event';


class Itinerary extends Component {
    render() {

        const EventComponent = this.props.events.map((event, i)=>{
                        console.log(event);
                        return <Event {...event} key={i}/>
                    })


        return (
            <div>
                {/* <p>This is a single itinerary!</p> */}
                Itinerary Name: {this.props.name}<br/>
                Events:<br/>
                {EventComponent}
            </div>
        );
    }
}

export default Itinerary;