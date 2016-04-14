'use strict';

import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import ActionHelp from 'material-ui/lib/svg-icons/action/help'

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
              showMenuIconButton={false}
              iconElementRight={ 
                <IconButton
                    onTouchTap={this.props.aboutHandler}>
                    <ActionHelp />
                </IconButton>} />
            );
    }
}

export default Header;
