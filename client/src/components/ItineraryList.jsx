import React, { Component } from 'react';
import Itinerary from './Itinerary';
import axios from 'axios';
import {NavBarStyle} from '../styles/Styles';
import {ItineraryListStyle} from '../styles/Styles';
import {Link} from 'react-router-dom';


class ItineraryList extends Component {

    constructor(){
        super();
        this.state = {
            user: {
                itineraries: []
            }
        }
    }

    componentWillMount(){
        const userId =  this.props.match.params.userId
        console.log("USER ID:", userId );
        axios.get(`/api/users/${userId}/itinerary`).then(res => {
            this.setState({user: res.data})
            
        });
    }

    render() {
    const userId =  this.props.match.params.userId
    const ItineraryComponent = this.state.user.itineraries.map((itinerary, i)=>{
        // return <Itinerary {...itinerary} key={i}/>                
        // console.log(`itinerary id ${JSON.stringify(itinerary)}`)
                    return <div key={i}><Link to={{
                    pathname:`/users/${userId}/itinerary/${itinerary._id}`}}>
                    {`see itinerary : ${itinerary.name}`} 
                </Link> </div>
})

        return (
            <div>                
                <NavBarStyle>
                    <div>
                         {/* <p className="TextStyle2">{`${userId}'s Itineraries`}</p>  */}
                    </div>
                    <div>
                        <Link to={`/users`}><small>USERS</small></Link> 
                        <Link to="/"><small>HOME</small></Link>
                    </div>
                </NavBarStyle>
                <br/>
                <ItineraryListStyle>
                    {ItineraryComponent}
                <br/>
                <br/>
                <br/>
                <br/>                
                <br/>
                <br/>                
                <br/>
                <br/>                
                <br/>
                <br/>                
                <br/>
                <br/>  
                </ItineraryListStyle>
                <br/>
                <br/>                
                <br/>
                <br/>                
                <br/>
                <br/>                
                <br/>
                <br/>                
                <br/>
                <br/>                
                <br/>
                <br/>                
                <br/>
                <br/>                
                <br/>                
                <br/>
                <br/>
                <br/>                
                <br/>
                <br/>                
                <br/>
                <br/>                
                <br/>
                <br/>    
            </div>
        );
    }
}

export default ItineraryList;