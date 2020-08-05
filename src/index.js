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

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);


