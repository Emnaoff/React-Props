import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function profileComponents(props) {

    /*Inline Styling*/

    const costumize={border: "7px solid rgb(143, 116, 150)", padding: "10px",
     borderRadius:"15px", width: "600px", textAlign: "center", 
     fontFamily: "Verdana, Geneva, Tahoma, sans-serif", 
    color: "grey", marginLeft: "450px", marginTop: "80px"}
    return (
       
            <div class="profile" style={costumize} >

                {/*Adding the Props*/}

            <img src={props.children} alt="myProfilePicture" width="400px" height="300px" align-items="center"/>

                <br/><br/>

                <h3>{props.fullname}</h3>
                <br/>
                <h3>{props.bio}</h3>
                <br/>
                <h3>{props.profession}</h3>
                <br/>
                <br/>

                {/*Adding the Button*/}

                <Button variant="info" onClick={props.handleName(props.fullname)}> Infos About me </Button>{' '}
                
                </div>

                
        
    )
}
           /*Default Props of my profileComponents*/
           profileComponents.defaultProps={
               fullname: 'First Name and Last Name',
               bio:'Who am I ?',
               profession:'what do I do for a living?'
           };

             /*PropTypes of My profileComponents*/
              profileComponents.prototype={
                  fullname:PropTypes.string,
                  bio:PropTypes.string,
                  profession:PropTypes.string,
                  children:PropTypes.image,
                  handleName:PropTypes.func,
              };

export default profileComponents;
