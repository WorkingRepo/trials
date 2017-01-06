import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';

import { Link } from 'react-router'

class Add extends Component {

  render() {
    return (
      <div className="container">



      	<div className="top">
    			<h1 id="title" className="animated fadeInDown"><span id="logo">Add Restaurant</span></h1>
    		</div>
    		<div className="login-box animated fadeInUp">
    			<div className="box-header">
    				<h2 >Log in</h2>
    			</div>

          <label forName="Rname">Restaurant Name</label>
    			<br/>
    			<input type="text" id="Rname" />

    			<br/>
    		  <label forName="latitute">latitute</label>
    			<br/>
    			<input type="text" id="latitute" />
    			<br/>

          <label forName="longitude">longitude</label>
          		<br/>
            <input type="text" id="longitude" />

           <br/>
           <label forName="Streetname">Street Name</label>
           		<br/>
           <input type="text" id="Streetname" />
         <br/>

         <label forName="address">Address</label>
         		<br/>
         <input type="textarea" id="address" />
           <br/>
          <label forName="phone">Phone</label>
          		<br/>
         <input type="text" id="phone" />
                     <br/>
         <label forName="email">Email ID</label>
         		<br/>
             <input type="text" id="email" />
         <br/>
      <label forName="homeurl">HomePage URL</label>
      		<br/>
           <input type="text" id="homeurl" />

                     <br/>
              <label forName="facebookurl">Facebook URL</label>
              		<br/>
            <input type="text" id="facebookurl" />
              <br/>
              <label forName="timings">Timings:</label>
                     <br/>
                   <label forName="otimings">Open</label>
                   		<br/>
                 <input type="text" id="otimings" />
                     <br/>
                   <label forName="ctimings">Close</label>
                   		<br/>
                   <input type="text" id="ctimings" />
                   <br />

    			<button type="submit">Sign In</button>
    			<br/>

    		</div>
    	</div>
    );
  }
}

export default Add;
