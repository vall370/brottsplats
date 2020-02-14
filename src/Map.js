import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import L from "leaflet";
import axios from "axios";

const customMarker = new L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40]
});

class MapComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 12,
      bikeMarkers: []
    };
  }
  updateDimensions() {
    const height = window.innerWidth >= 992 ? window.innerHeight : 400
    this.setState({ height: height })
  }
  componentDidMount() {
    const map = this.leafletMap.leafletElement;
    axios.get("https://api.myjson.com/bins/fvrjc").then(response => {
      response.data.coordinates.map(el => {
        let markerArray = [];
        const marker = L.marker([el.latitude, el.longitude], { icon: customMarker });
        marker.addTo(map);
      });
    });
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div id="map">
        <Map
          style={{ height: "100vh" }}
          center={position}
          zoom={this.state.zoom}
          ref={m => {
            this.leafletMap = m;
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
      </div>
    );
  }
}

export default MapComp;
