'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';


class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    _onRightClick(e) {
        //window.location.href = 'https://github.com/leftstick/generator-material-react';
        //event.stop(e);
    }

    _onLeftClick(e) {
        //window.location.href = 'http://leftstick.gitcafe.io/';
        //event.stop(e);
    }

    _onResize(e) {

    }

    componentWillMount() {
        //window.addEventListener('resize', this._onResize, false);
    }

    componentWillUnmount() {
        //window.removeEventListener('resize', this._onResize, false);
    }

    render() {
        return (
            <AppBar title="Material-UI icon explorer"
              iconClassNameLeft="icon-html5"
              iconElementRight={ <IconButton 
                                    iconClassName="icon-github-1" 
                                    onClick={ this._onRightClick.bind(this) } 
                                    tooltip="View Source" /> }
              onLeftIconButtonTouchTap={ this._onLeftClick.bind(this) } />
            );
    }
}

export default Header;
