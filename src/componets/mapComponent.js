import React, { Component } from 'react';
import '../mapComponent.css';
import GoogleMapReact from 'google-map-react';

class MapComponent extends Component {
    constructor(props) {
        super(props);
        const defaultProps = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 11
        };
        this.state = { lat: 35.34365 }
    }

    addLat = () => {
        console.log('hi');
        this.setState(prevSt=>({
            lat:prevSt.lat+0.0005
        }))
    }

    render() {
        const AnyReactComponent = ({ text }) => (
            <div style={{
                color: 'white',
                background: 'grey',
                padding: '15px 10px',
                display: 'inline-flex',
                textAlign: 'center',
                height: '50px',
                width: '50px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '100%',
                transform: 'translate(-50%, -50%)'
            }}>
                {text}
            </div>
        );

        this.props = {
            center: { lat: 35.34365, lng: 25.1362015 },
            zoom: 17
        };

        return (
            <div className="ui grid mapComponent">
                <div className="three wide column">
                    <div className="ui vertical icon menu mapSidebar">
                        <a className="item" onClick={this.addLat}>
                            <i className="trophy icon"></i>
                        </a>
                        <a className="item">
                            <i className="map marker alternate camera icon"></i>
                        </a>
                        <a className="item">
                            <i className="university icon"></i>
                        </a>
                        <a className="item">
                            <i className="bus icon"></i>
                        </a>
                    </div>
                </div>
                <div className="thirteen wide column noPadding">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyD4N_qmhJ0yn-cfGaZ7WaPMbvlbH15eqiE' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <AnyReactComponent
                            onClick={this.addLat}
                            lat={this.state.lat}
                            lng={25.13620}
                            text={'Koules'}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}

export default MapComponent;