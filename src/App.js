import React, { Component } from 'react';
import logo from './logo.svg';
import { getRoutesData } from "./navs/topNavs/getRoutesData";
//import {  } from "./moduleLoader";
import './App.css';
import { renderTopNavLinksAndRoutes, routeKinds, TopNav } from './moduleLoader';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      routes:getRoutesData(routeKinds.TOP)
    };
  }
  

  render() {

    // this.setState({
    //   routes: getRoutesData(m.routeKinds.TOP),
    // });

    const ret = renderTopNavLinksAndRoutes(this.state.routes);
    console.log(ret);

    return (
      <div className="App">
        <TopNav {...this.props} links={ret['links']} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <React.Fragment>
          {ret['routes']}
        </React.Fragment>
      </div>
    );
  }
}

export default App;
