'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import StylePropable from 'material-ui/lib/mixins/style-propable';

class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            paperStyle: this._getPaperStyle(),
        };
    }

    _getPaperStyle() {
        let style = {
            minHeight: '350px',
            margin: '5px auto 0 auto',
            paddingBottom: '10px',
            backgroundColor: '#fff',
            maxWidth: '800px'
        };
        return style;
    }

    render() {
        let mergeStyles = StylePropable.mergeStyles;
        return (
            <Paper 
                style={ mergeStyles(this.state.paperStyle) }
                rounded={ false }>
                    { this.props.children }
            </Paper>
            );
    }
}

Panel.propTypes = {children: React.PropTypes.element};

export default Panel;
