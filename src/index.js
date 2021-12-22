import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//* Main Component
import App from './App';

import reportWebVitals from './reportWebVitals';

//* App Components
import Nav from './components/Nav'
import News from './components/News'

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <News />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
