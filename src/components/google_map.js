import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        console.log('lat: ', this.props.lat);
        console.log('lon: ', this.props.lon);
       const g = new GoogleMap.maps.Map(
            this.refs.map, {
                zoom: 12, 
                center: {
                    lat: this.props.lat, 
                    lng: this.props.lon
                }
            });
        return g;
    }

    render() {
        // this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;
