import React from 'react';
import ReactDOM from 'react-dom';
import MainFrame from './components/MainFrame';

require('./styles/main.scss');

ReactDOM.render(<MainFrame name="Jan" age={27}/>,
   document.getElementById('app'));