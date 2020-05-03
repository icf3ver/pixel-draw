import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <App rows = {10} columns = {10}/>,
  document.getElementById('root')
);