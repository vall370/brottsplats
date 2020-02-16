import React from "react";

import { Marker } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

import "./styles.css";

export default class Markers extends React.PureComponent {
    
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <MarkerClusterGroup>
          { this.props.markers.map((marker, i) => {
              return (
                <Marker
                  key={JSON.stringify(marker.position)}
                  position={marker.position}
                  onClick={this.props.onMarkerClick.bind(null, i)}
                />
              );
            })
          }
        </MarkerClusterGroup>
      );
    }
  }