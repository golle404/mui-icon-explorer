'use strict';

import React from 'react';
import StylePropable from 'material-ui/lib/mixins/style-propable';

import IconButton from 'material-ui/lib/icon-button';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import SvgIcon from 'material-ui/lib/svg-icon';

import socialData from './svg/social-icons.js';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }
    _onClick(url, e){
        window.location.href = url;
        event.stop(e);        
    }
    render() {
        let footerStyle = {
            display: "flex",
            width: "100%",
            textAlign: "center",
            marginTop: "5px",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#00BCD4",
            color: "#fff",
            fontFamily: "Roboto, sans-serif"
        };
        let mergeStyles = StylePropable.mergeStyles;
        return (
                <footer style={ mergeStyles(footerStyle) }>
                    <div>{ '\u00A9 2016 Goran Rakić' }</div>
                        <IconButton 
                            tooltip="Twitter"
                            tooltipPosition="top-center"
                            onClick={ this._onClick.bind(null, "https://twitter.com/gollactive") } >
                            <SvgIcon 
                                viewBox='16 16 32 32'
                                color={"#fff"}>
                                <path d={socialData.twitter.icon} />
                            </SvgIcon>
                        </IconButton>
                        <IconButton 
                            tooltip="GitHub"
                            tooltipPosition="top-center"
                            onClick={ this._onClick.bind(null, "https://github.com/golle404") } >
                            <SvgIcon 
                                viewBox='16 16 32 32'
                                color={"#fff"}>
                                <path d={socialData.github.icon} />
                            </SvgIcon>
                        </IconButton>
                        <IconButton 
                            tooltip="CodePen"
                            tooltipPosition="top-center"
                            onClick={ this._onClick.bind(null, "http://codepen.io/golle404/") } >
                            <SvgIcon 
                                viewBox='16 16 32 32'
                                color={"#fff"}>
                                <path d={socialData.codepen.icon} />
                            </SvgIcon>
                        </IconButton>
                </footer>
            );
    }
}

export default Footer;
