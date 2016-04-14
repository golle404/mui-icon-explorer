'use strict';

import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import IconListItem from './IconListItem.jsx'

import { FileFolder } from 'material-ui/lib/svg-icons/index.js';

class IconFolder extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const touchHandler = this.props.touchHandler;
        const dirPath = "material-ui/lib/svg-icons/" + this.props.dirPath;
        const dirClass = this.props.dirPath.charAt(0).toUpperCase() + this.props.dirPath.slice(1)
        return (
            <ListItem 
                primaryText = {dirClass}
                primaryTogglesNestedList = {true}
                leftIcon = {<FileFolder />}
                nestedItems = {this.props.data.map(function(m, j){
                    return  <IconListItem 
                                key={j}
                                touchHandler={touchHandler}
                                dirPath={dirPath}
                                dirClass={dirClass}
                                relativePath={m} />
            })} />
        )
    }
}

IconFolder.propTypes = {
    data: React.PropTypes.array,
    touchHandler: React.PropTypes.func,
    dirPath: React.PropTypes.string,
    dirClass: React.PropTypes.string

};

export default IconFolder;
