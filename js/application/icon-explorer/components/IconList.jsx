'use strict';

import React from 'react';
import List from 'material-ui/lib/lists/list';

import IconFolder from './IconFolder.jsx'

class IconList extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {
        const touchHandler = this.props.touchHandler
        return (
            <List>
                {this.props.data.map(function(v, i){
                    return <IconFolder
                                key = {i} 
                                dirPath = {v.dir}
                                data = {v.modules}
                                touchHandler = {touchHandler} />     
                })}
            </List>
        );
    }
}

IconList.propTypes = {
    data: React.PropTypes.array,
    touchHandler: React.PropTypes.func 
};

export default IconList;