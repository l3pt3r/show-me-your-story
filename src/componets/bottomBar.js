import React, { Component } from 'react';
import BarButton from "./barbutton";

class BottomBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 'selectedView': 1 };
    }

    buttonAction(clickedButton){
        this.setState({'selectedView':clickedButton});
    }

    render() {
    const currentView = this.state.selectedView;

        return (
            <footer className="ui bottom fixed menu">
                <div className="ui four buttons">
                    <BarButton iconClass="user circle" isActive={currentView===0} onClick={this.buttonAction.bind(this,0)}/>
                    <BarButton iconClass="map" isActive={currentView===1} onClick={this.buttonAction.bind(this,1)} />
                    <BarButton iconClass="road" isActive={currentView===2} onClick={this.buttonAction.bind(this,2)} />
                    <BarButton iconClass="retro camera" isActive={currentView===3} onClick={this.buttonAction.bind(this,3)} />
                </div>
            </footer>
        );
    }
}

export default BottomBar;