import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import "@fortawesome/fontawesome-free/css/all.min.css"


// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondCounter from './components/SecondCounter';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <SecondCounter />
  </React.StrictMode>
);