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
                {this.props.userName}<br/>
                {this.props.email}<br/>
                <img src={this.props.avatar}/><br/>
                {ItineraryComponent}<br/>  
                <br/>
            </div>
        );
    }
}

export default User;