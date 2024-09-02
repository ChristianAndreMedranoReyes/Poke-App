import React from 'react';
import ReactDOM from 'react-dom';
import { PokeApp } from './components/PokeApp';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.render(
  <React.StrictMode>
    <PokeApp />
  </React.StrictMode>,
  document.getElementById('root')
);