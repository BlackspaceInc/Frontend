import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ReactGA from 'react-ga';

import './index.css';
import App from './App';

//initialize our tracking code collect all GA-related code
export const initGA = () => {       
  ReactGA.initialize('UA-172332932-1'); // put your tracking id here
};

// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);


