import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
    render() {
        return (
            <div>
                <p>This is an event list!</p><br/>
                <Event/>
            </div>
        );
    }
}

export default EventList;