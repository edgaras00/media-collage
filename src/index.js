import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CollageContextProvider} from './Context/CollageContext';
import './styles/index.css';

ReactDOM.render(
  <CollageContextProvider>
    <App />
  </CollageContextProvider>,
  document.getElementById('root')
);

