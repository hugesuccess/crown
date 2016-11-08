import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Logo from './images/crowns.png';
import crown_map from './crown.json';

class Crown extends Component {

    render() {

        const style = {
          margin: 20,
          textAlign: 'center',
          display: 'inline-block',
          backgroundColor:'rgba(0,0,0,0)',
          transform: 'scale('+ this.props.scale +')'
        };

        var p = Math.floor(Math.random() * 11);

        var divStyle = {
          backgroundImage: 'url('+ Logo  +')',
          backgroundSize: crown_map[p].size,
          width: crown_map[p].width,
          height: crown_map[p].height,
          display: 'inline-block',
          backgroundPosition: crown_map[p].position,
        };

        return (
            <div style={ divStyle }></div>
        );
    }
}

export default Crown;
