import React, { Component } from 'react';
import axios from 'axios';
import Event from './Event';


class Itinerary extends Component {
    //do an axios call after component wil mount
    //make sure you're grabbing itinerary not user
    

    render() {

        const EventComponent = this.props.events.map((event, i)=>{
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