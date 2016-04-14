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
/*require.ensure(['splash-screen/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/splash.min.css').use();
    require('splash-screen').enable('circular');
});

require.ensure([
    'less/main.less',
    'splash-screen',
    './fw/Entrance'
], function(require) {

    require('less/main.less');

    var Entrance = require('./fw/Entrance').default;
    (new Entrance()).run();
});*/
