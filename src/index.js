import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// Components
import App from './App';
import Counter from './components/CounterCMPT'

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
