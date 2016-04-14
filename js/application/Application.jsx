'use strict';

import React from 'react';

import Copy from 'copy-to-clipboard';

import Header from './icon-explorer/components/Header.jsx';
import Footer from './icon-explorer/components/Footer.jsx';
import Panel from './icon-explorer/components/Panel.jsx';
import About from './icon-explorer/components/About.jsx';
import IconList from './icon-explorer/components/IconList.jsx';
import Snackbar from 'material-ui/lib/snackbar';
import Divider from 'material-ui/lib/divider';

class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            snackbarOpen: false,
            snackbarMsg: "",
            aboutOpen: false
        };
        this._onCopy = this._onCopy.bind(this);
        this._onSnackbarClosed = this._onSnackbarClosed.bind(this);
        this._aboutHandler = this._aboutHandler.bind(this);
        this.setState = this.setState.bind(this);
    }
    _onCopy(iconClass, iconPath){
        const cb = "import " + iconClass + " from '" + iconPath + "'";
        this.setState({snackbarOpen: true, snackbarMsg: cb});
        Copy(cb);
    }
    _onSnackbarClosed(){
        this.setState({snackbarOpen: false})
    }
    _aboutHandler(){
        this.setState({aboutOpen: !this.state.aboutOpen})
    }
    render() {
        const snackbarStyle = {
            textAlign: "center",
            fontFamily: "Roboto, sans-serif",
            height: "auto",
            lineHeight: "100%"
        }
        return (
                <div>
                    <Header 
                        aboutHandler={this._aboutHandler}/>
                    <Panel>
                        <IconList 
                            data={this.props.data} 
                            touchHandler={this._onCopy} />
                    </Panel>
                    <Divider />
                    <Footer/>
                    <About 
                        open={this.state.aboutOpen}
                        aboutHandler={this._aboutHandler} />
                    <Snackbar
                        bodyStyle={snackbarStyle}
                        open={this.state.snackbarOpen}
                        message={
                            <div>
                                <div style={{padding: "6px", color: "#FF8A65"}}>{this.state.snackbarMsg}</div>
                                <div style={{padding: "6px"}}>Copied to  your clipboard</div>
                            </div>

                        }
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
