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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
