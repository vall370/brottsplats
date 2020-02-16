import React from "react";
import ReactDOM from "react-dom";
import L from "leaflet";
import carlton from "./fHctp.gif";
import faker from "faker";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import markers from "./markers";

import "./styles.css";

class InteractiveMap extends React.Component {
    state = {
      center: [41.505, -100.09],
      zoom: 5,
      height: window.innerHeight,
      currentMarker: null
    };
  
    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleResize);
    }
  
    handleResize = e => {
      this.setState({ height: window.innerHeight });
    };
  
    handleMarkerClick = i => {
      this.setState({
        currentMarker: i,
        center: markers[i].position
      });
    };
  
    handleClosePanel = () => {
      this.setState({
        currentMarker: null
      });
    };
  
    handleViewportChange = ({ center, zoom }) => {
      this.setState({
        center,
        zoom
      });
    };
  
    render() {
      const place = places[this.state.currentMarker];
  
      return (
        
        <div className={`wrapper ${this.state.currentMarker ? "open" : ""}`}>
          
          <Map
            onClick={this.handleClosePanel}
            onViewportChanged={this.handleViewportChange}
            className="map"
            center={this.state.center}
            zoom={this.state.zoom}
            style={{ height: this.state.height }}
          >
            <TileLayer
              attribution={`© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`}
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers markers={markers} onMarkerClick={this.handleMarkerClick} />
          </Map>
          <div className="menu">
            <h1>Future Filters</h1>
          </div>
          <div className="infopanel">
            <button className="closebutton" onClick={this.handleClosePanel}>
              <svg
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                enable-background="new 0 0 24 24"
              >
                <path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z" />
                <path fill="none" d="M0,0h24v24H0V0z" />
              </svg>
            </button>
            <div className="contents">
              {place && (
                <React.Fragment>
                  <h1>{place.name}</h1>
                  <div>{place.location}</div>
                  <div>
                    <div
                      className={`stat-block ${
                        place.safety.preventableAccidents +
                          place.safety.dotPreventableAccidents +
                          place.safety.injuries >
                        1
                          ? "bad"
                          : "good"
                      }`}
                    >
                      <h2>Safety</h2>
                      <div className="stat-list">
                        <div className="stat">
                          <h3>Preventable Accidents</h3>
                          <div>{place.safety.preventableAccidents}</div>
                        </div>
                        <div className="stat">
                          <h3>DOT Preventable Accidents</h3>
                          <div>{place.safety.dotPreventableAccidents}</div>
                        </div>
                        <div className="stat">
                          <h3>Injuries</h3>
                          <div>{place.safety.injuries}</div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`stat-block ${
                        place.driverUtilization < 0.5 ? "bad" : "good"
                      }`}
                    >
                      <h2>Driver Utilization</h2>
                      <div className="stat-list">
                        <div className="stat">
                          <b>
                            {place.driverUtilization.toLocaleString(
                              undefined,
                              { style: "percent" }
                            )}
                          </b>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`stat-block ${
                        place.turnover.monthly > 0.5 ||
                        place.turnover.anualized > 0.5
                          ? "bad"
                          : "good"
                      }`}
                    >
                      <h2>Turnover</h2>
                      <div className="stat-list">
                        <div className="stat">
                          <h3>Monthly</h3>
                          <div>
                            {place.turnover.monthly.toLocaleString(
                              undefined,
                              { style: "percent" }
                            )}
                          </div>
                        </div>
                        <div className="stat">
                          <h3>Annualized</h3>
                          <div>
                            {place.turnover.anualized.toLocaleString(
                              undefined,
                              { style: "percent" }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="stat-block">
                      <h2>Driver Count</h2>
                      <div className="stat-list">
                        <div className="stat">
                          <b>
                            {place.driverCount.ft +
                              place.driverCount.ic +
                              place.driverCount.pt +
                              place.driverCount.term}
                          </b>
                        </div>
                        <div className="stat">
                          <h3>FT</h3>
                          <div>{place.driverCount.ft}</div>
                        </div>
                        <div className="stat">
                          <h3>PT</h3>
                          <div>{place.driverCount.pt}</div>
                        </div>
                        <div className="stat">
                          <h3>IC</h3>
                          <div>{place.driverCount.ic}</div>
                        </div>
                        <div className="stat">
                          <h3>Term</h3>
                          <div>{place.driverCount.term}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      );
    }
  }