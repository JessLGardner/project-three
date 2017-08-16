import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {HomeStyle} from '../styles/Styles'
import {NavBarStyle} from '../styles/Styles';
import {BoldTextStyle} from '../styles/Styles';
import {Button} from '../styles/Styles';




class Home extends Component {

    render() {

        return (
        <div>
            <NavBarStyle>  
            </NavBarStyle>
            
            <HomeStyle>
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
                    <div> 
                        <p className="TextStyle"><i className="i">CULTUR</i><b className="b">ATL</b></p>
                    </div>
                    <div>
                        <Link to="/users"><Button>enter</Button></Link>
                    </div>

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
                <br/>
                <br/> 
                <br/>
                <br/> 
                <br/>
                <br/> 
                <br/>
                <br/> 
                <br/>
       
            </HomeStyle>
        </div>
        );
    }
}

export default Home;
