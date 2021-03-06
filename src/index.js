import React from 'react';
import { ReactDOM, render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import render from 'react-snapshot';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const rootElement = document.getElementById('root');
if(rootElement.hasChildNodes()){
    hydrate( <BrowserRouter>
        <App />
    </BrowserRouter>,rootElement);
} else {
  render(
  <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
