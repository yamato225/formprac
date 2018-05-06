import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form1 from './Form1';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Form1 initState="HI"/>,
    document.getElementById('root')
);
registerServiceWorker();
