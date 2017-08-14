import React, { Component } from 'react';

class Event extends Component {
    render() {
        return (
            <div>
                {/* <p>This is a single event!</p> */}
                Event name: {this.props.name}<br/>
                What: {this.props.description}<br/>
                When: {this.props.date}<br/>
                When: {this.props.time}<br/>
                Where: {this.props.place}<br/>
                How much: {this.props.price}<br/>
                <a href={this.props.link}>link</a><br/>
                <br/>
            </div>
        );
    }
}

export default Event;