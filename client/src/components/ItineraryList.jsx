import React, { Component } from 'react';
import Itinerary from './Itinerary';

class ItineraryList extends Component {
    render() {
        return (
            <div>
                <p>This is an intinerary list!</p><br/>
                <Itinerary/>
            </div>
        );
    }
}

export default ItineraryList;