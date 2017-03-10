import React, { Component } from 'react';
var {Link} = require('react-router');
import Nav from 'Nav';
import Footer from 'Footer';
import * as Redux from 'react-redux';
import router from 'app/router/';

class About extends Component{


  render() {
    return (
      <div className="font-main">
        <Nav/>
        <div className="mapsection">
          Hello there
          <iframe width="600" height="450" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDcV8OiTF_Lk4UCZLszjEPyAbBV-1p-tBk&q=Austin+TX" allowFullScreen>
          </iframe>

        </div>
        <Footer />
      </div>
    )
  }
};

export default About;
