import React, { Component } from 'react';
import CameraComponent from './cameraComponent.js';
import MapComponent from './mapComponent';
import ProfileComponent from './profileComponent';
import PointsComponent from './pointsComponent';

class ViewSelector extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const currentView = this.props.selectedView;
        switch(currentView){
            case 0:
            return <ProfileComponent />
            case 1:
            return <MapComponent />
            case 2:
            return <PointsComponent />
            case 3:
            return <CameraComponent />
            default:
            return <div/>
        }
    }
}

export default ViewSelector;