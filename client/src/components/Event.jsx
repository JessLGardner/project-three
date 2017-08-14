import React, { Component } from 'react';

class Event extends Component {
    render() {
        return (
            <div>
                {/* <p>This is a single event!</p> */}
                {this.props.name}<br/>
                {this.props.description}<br/>
                {this.props.date}<br/>
                {this.props.time}<br/>
                {this.props.place}<br/>
                {this.props.price}<br/>
                <a href={this.props.link}>link</a><br/>
                <br/>
            </div>
        );
    }
}

export default Event;