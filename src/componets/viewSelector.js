import React, { Component } from 'react';
import CameraComponent from './cameraComponent.js';
import MapComponent from './mapComponent';

class ViewSelector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentView = this.props.selectedView;
        switch(currentView){
            case 1:
            return <MapComponent />
            case 3:
            return <CameraComponent />
            default:
            return <div/>
        }
    }
}

export default ViewSelector;