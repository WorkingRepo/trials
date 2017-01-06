import React, { Component } from 'react';
import './css/animate.css';
import './css/style.css';

import { Link } from 'react-router'

class Delete extends Component {

  render() {
    return (
      <div className="container">

      	<div className="top">
    			<h1 id="title" className="animated fadeInDown"><span id="logo">Delete Restaurant</span></h1>
    		</div>
    		<div className="login-box animated fadeInUp">
    			<div className="box-header">
    				<h2 >Delete</h2>
    			</div>

          <label forName="Rname">Restaurant Name</label>
          <input type="text" id="Rname" />
          <br/>
          <label forName="latitute">latitute</label>
          <input type="text" id="latitute" />
          <br/>
          <label forName="longitude">longitude</label>
          <input type="text" id="longitude" />
          <br/>
          <label forName="Streetname">Street Name</label>
          <input type="text" id="Streetname" />
          <br/>
          <button type="submit">Delete</button>
    	    <br/>

    		</div>
    	</div>
    );
  }
}

export default Delete;
