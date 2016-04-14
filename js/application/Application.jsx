'use strict';

import React from 'react';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import lightTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';

import Copy from 'copy-to-clipboard';

import Header from './icon-explorer/components/Header.jsx';
import Footer from './icon-explorer/components/Footer.jsx';
import Panel from './icon-explorer/components/Panel.jsx';
import IconList from './icon-explorer/components/IconList.jsx';
import Snackbar from 'material-ui/lib/snackbar';

class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            snackbarOpen: false,
            snackbarMsg: ""
        };
        this._onCopy = this._onCopy.bind(this);
        this._onSnackbarClosed = this._onSnackbarClosed.bind(this);
        this.setState = this.setState.bind(this);
    }

    getChildContext() {
        return {muiTheme: ThemeManager.getMuiTheme(lightTheme)};
    }

    _onCopy(iconClass, iconPath){
        const cb = "import " + iconClass + " from '" + iconPath + "'";
        this.setState({snackbarOpen: true, snackbarMsg: cb});
        Copy(cb);
    }
    _onSnackbarClosed(){
        this.setState({snackbarOpen: false})
    }
    render() {
        return (
                <div>
                    <Header/>
                    <Panel>
                        <IconList 
                            data={this.props.data} 
                            touchHandler={this._onCopy} />
                    </Panel>
                    <Footer/>
                    <Snackbar
                        bodyStyle={{textAlign: "center"}}
                        open={this.state.snackbarOpen}
                        message="Import statement copied to  your clipboard"
                        autoHideDuration={2000}
                        onRequestClose={this._onSnackbarClosed} />
                </div>
            );
    }
}

Application.childContextTypes = {
    muiTheme: React.PropTypes.object
};
Application.propTypes = {
    data: React.PropTypes.array
};

export default Application;
