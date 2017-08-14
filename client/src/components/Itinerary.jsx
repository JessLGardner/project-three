import React, { Component } from 'react';
import axios from 'axios';
import Event from './Event';


class Itinerary extends Component {



    // componentWillMount(){
    //     console.log(this.props)
    //     const userId =  this.props.match.params.userId
    //     const itineraryId =  this.props.match.params.itineraryId
    //     axios.get(`/api/users/${userId}/itinerary/${itineraryId}`).then(res => {
    //         this.setState({user: res.data})
    //     });
    // }

    render() {

        const EventComponent = this.props.events.map((event, i)=>{
                        console.log(event);
                        return <Event {...event} key={i}/>
                    })


        return (
            <div>
                Itinerary Name: {this.props.name}<br/>
                Events:<br/>
                {EventComponent} 

                delete itin<br/>
                edit itin<br/>
                <br/>
            </div>
        );
    }
}

export default Itinerary;