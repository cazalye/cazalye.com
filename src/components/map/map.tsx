import "./map.scss";
import React, { Component } from 'react';
import MapGL from 'react-map-gl';
// const MapGL = require("react-map-gl");
const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2F6YWx5ZSIsImEiOiJjazM0NDNhbG0wd2FoM21wOWl1M2hpbTFsIn0.4imTAlDw7TvgEd-RjeR7-g';

class Map extends Component {
    state = {
        mapStyle: '',
        viewport: {
          latitude: 37.805,
          longitude: -122.447,
          zoom: 15.5,
          bearing: 0,
          pitch: 0
        }
      };
    render() {
        const {viewport, mapStyle} = this.state;
        return (
            <div id="map-section">
                <MapGL
                    width="100%"
                    height="100%"
                    latitude={41.702599}
                    longitude={-4.516411}
                    zoom={1}
                    scrollZoom={false}
                    onViewportChange={(viewport) => {
                        const {width, height, latitude, longitude, zoom} = viewport;
                        // Optionally call `setState` and use the state to update the map.
                    }}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                />
            </div>
        );
    }
}

export default Map;