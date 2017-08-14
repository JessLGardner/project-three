import React, { Component } from 'react';
import Itinerary from './Itinerary';

class User extends Component {
    render() {

        const ItineraryComponent = this.props.itineraries.map((itinerary, i)=>{
                        console.log(itinerary);
                        return <Itinerary {...itinerary} key={i}/>
                    })


        return (
            <div>
                {/* <p>this is a single user</p> */}
                Username: {this.props.userName}<br/>
                email: {this.props.email}<br/>
                <img src={this.props.avatar} alt="user avatar"/><br/>
                Itineraries:<br/>
                {ItineraryComponent}<br/>  
                <br/>
            </div>
        );
    }
}

export default User;