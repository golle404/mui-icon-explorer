/**
 *  index.js, the starter.
 *
 *  @author  Goran
 *  @date    Apr 13, 2016
 *
 */
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from 'js/application/Application.jsx';

let injectTapEventPlugin = require('react-tap-event-plugin');
       
injectTapEventPlugin();

import iconData from './data/icons.js';

ReactDOM.render(<Application data={iconData}/>, document.querySelector('#view'));