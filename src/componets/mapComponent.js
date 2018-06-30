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
                        <a className="item">
                            <i className="gamepad icon"></i>
                        </a>
                        <a className="item">
                            <i className="video camera icon"></i>
                        </a>
                        <a className="item">
                            <i className="video play icon"></i>
                        </a>
                        <a className="item">
                            <i className="location arrow play icon"></i>
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
                            lat={35.34365}
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