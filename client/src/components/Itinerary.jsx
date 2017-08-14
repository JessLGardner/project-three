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