import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
    render() {
        return (
            <div>
                <p>This is an event list!</p>
                <Event/>
            </div>
        );
    }
}

export default EventList;