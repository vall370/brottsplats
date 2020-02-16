import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import axios from "axios";
import Markers from './Markers';

class MapComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoom: 5,
      center: [60.1282, 18.6435],
      markers: [],
      currentMarker: null,
      height: null
    };
  }
  
  updateDimensions() {
    const height = window.innerWidth >= 992 ? window.innerHeight : 400
    this.setState({ height: height })
  }

  componentDidMount() {
    axios.get("https://api.myjson.com/bins/fvrjc").then(response => {
      let markers = [];
      response.data.coordinates.map(el => {
        markers.push({ position: [el.latitude, el.longitude] });
      });
      this.setState({ markers });
    });
  }

  handleMarkerClick = i => {
    this.setState({
      currentMarker: i,
      center: this.state.markers[i].position
    });
  };

  render() {
    return (
      <div id="map">
        <Map
          style={{ height: "100vh" }}
          center={this.state.center}
          zoom={this.state.zoom}
        >
          <TileLayer
            attribution={`© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`}
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Markers markers={this.state.markers} onMarkerClick={this.handleMarkerClick} />
        </Map>
      </div>
    );
  }
}

export default MapComp;
