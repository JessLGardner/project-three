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
                Username: {this.props.userName}<br/>
                email: {this.props.email}<br/>
                <img src={this.props.avatar} alt="user avatar"/><br/>
                Itineraries:<br/>

                  <button onClick={this.props.toggleItin}>{this.props.itinView ? 'Hide Itinerary List' : 'See Itinerary List' }</button>
                    {this.props.itinView ? ItineraryComponent : ""}  
                <br/>
                <br/>
            </div>
        );
    }
}

export default User;   

                 {/* {ItineraryComponent}<br/>    */}

