import React, { Component } from 'react';
import Nav from 'Nav';
import Footer from 'Footer';

import * as Redux from 'react-redux';
import router from 'app/router/';

class Main extends Component {
  render(){
    return (
      <div className="font-main">
        <Nav/>
          <div className="mainlandingsection">
            <div className="mainlandingsectiontext">
              <div className="footballdatatitle">
                RESTFUL FOOTBALL DATA.
              </div>
              <div className="titlesubtext">
                For football applications of your needs.
              </div>
              <a className="apibutton" href="#" role="button">Request an API Key</a>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
};

export default Main;
