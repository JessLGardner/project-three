import React, { Component } from 'react';
import {EventListStyle} from '../styles/Styles';


class Event extends Component {
    render() {
        return (
            <EventListStyle>
                <h2>{this.props.name}</h2>
                    <hr/>
                <p>{this.props.description}</p><br/>
                <small>DATE:</small>  {this.props.date}<br/>
                <small>TIME:</small>  {this.props.time}<br/>
                <small>PLACE:</small>  {this.props.place}<br/>
                <small>PRICE:</small>  {this.props.price}<br/>
                <a href={this.props.link}>MORE INFO</a><br/>
                <br/>
            </EventListStyle>
        );
    }
}

export default Event;