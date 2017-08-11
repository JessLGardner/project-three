import React, { Component } from 'react';
import EventList from './EventList';


class Itinerary extends Component {
    render() {
        return (
            <div>
                <p>This is a single itinerary!</p><br/>
                <EventList/>
            </div>
        );
    }
}

export default Itinerary;