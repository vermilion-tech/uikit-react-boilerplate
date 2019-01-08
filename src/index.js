import React from 'react';
import ReactDOM from 'react-dom';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons.min';

UIkit.use(Icons)

import './stylesheets/main.scss'

import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
