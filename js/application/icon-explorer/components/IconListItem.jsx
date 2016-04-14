'use strict';

import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

import * as svgIcons from 'material-ui/lib/svg-icons/index.js';

class IconListItem extends React.Component {
    constructor(props) {
        super(props);
        this.toCamelCase = this.toCamelCase.bind(this);
    }
    toCamelCase(str){
    	return str.toLowerCase().replace(/-(.)/g, function(match, gr) {
            return gr.toUpperCase();
        });
    }
    render(){
    	const touchHandler = this.props.touchHandler;
    	const modulePath = this.props.dirPath + "/" + this.props.relativePath;
        const iconClass = this.props.dirClass + this.toCamelCase("-"+this.props.relativePath);
        const Icon = svgIcons[iconClass]
    	return (
    		<ListItem
	            onTouchTap={touchHandler.bind(null, iconClass, modulePath)}
	            primaryText={iconClass}
	            secondaryText={modulePath}
	            leftIcon={<Icon />} />
		)
    }
}

IconListItem.propTypes = {
    touchHandler: React.PropTypes.func,
    dirPath: React.PropTypes.string,
    dirClass: React.PropTypes.string
};

export default IconListItem;
