'use strict';

import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import RaisedButton from 'material-ui/lib/raised-button';

class About extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Dialog
                title="About Material-UI Icon Explorer"
                modal={false}
                open={this.props.open}
                actions={
                    <RaisedButton 
                        label="Close"
                        primary={true}  
                        onTouchTap={this.props.aboutHandler} />
                    }
                onRequestClose={this.props.aboutHandler}>
                <div className="about">
                    <p><a href="http://www.material-ui.com/">Material-UI</a> is a set of <a href="http://facebook.github.io/react/">React</a> components that implement <a href="https://www.google.com/design/spec/material-design/introduction.html">Google's Material Design</a> specification.</p>
                    <p>It comes with bunch of SVG icons already bundled as React components, so many that it could be bit difficult to find right one.</p>
                    <p>So, I made this little app to help with it :-) Icons are grouped by categories, and clicking on one will copy it's import statement to clipboard.</p>
                    <p>For example :</p>
                    <code>import CommunicationBusiness from 'material-ui/lib/svg-icons/communication/business'</code>
                    <p>Built with: <a href="https://github.com/leftstick/generator-material-react">generator-material-react</a></p>
                    <p><a href="https://github.com/golle404/mui-icon-explorer">Source</a></p>
                </div>
            </Dialog>
        );
    }
}

About.propTypes = {
    open: React.PropTypes.bool,
    aboutHandler: React.PropTypes.func 
};

export default About;