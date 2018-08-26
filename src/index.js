import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Business from './components/Business/Business.js'
import BusinessList from './components/BusinessList/BusinessList.js'
import SearchBar from './components/SearchBar/SearchBar.js'

ReactDOM.render(<SearchBar />, document.getElementById('root'));
registerServiceWorker();
