import React, {Component} from 'react';
import {render} from 'react-dom';
// @ts-ignore
import MapGL, {Source, Layer} from 'react-map-gl';
import {dataLayer} from './map-style.js';
import dataJson from "./continents.json";
const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2F6YWx5ZSIsImEiOiJjazM0NDNhbG0wd2FoM21wOWl1M2hpbTFsIn0.4imTAlDw7TvgEd-RjeR7-g';

export default class Map extends Component<any, any> {
  state = {
    year: 2015,
    data: null,
    hoveredFeature: null,
  };

  componentDidMount() {
    // transform dataJson, add int values for continents
    dataJson.features.forEach((feature: any, i) => {
      feature.properties.index = i;
    });
    this.setState({data: dataJson});
  }

  _onHover = (event: any) => {
    const {
      features,
      srcEvent: {offsetX, offsetY}
    } = event;
    const hoveredFeature = features && features.find((f: any) => f.layer.id === 'data');

    this.setState({hoveredFeature, x: offsetX, y: offsetY});
  }

  render() {
    const {data} = this.state;

    return (
      <div style={{height: '100%'}}>
        <MapGL
          width="100%"
          height="100%"
          latitude={41.702599}
          longitude={-4.516411}
          zoom={1}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onHover={this._onHover}
        >
          <Source type="geojson" data={data}>
            <Layer {...dataLayer} />
          </Source>
        </MapGL>
      </div>
    );
  }
}
