import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router';

class BenchMap extends React.Component {
  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);

    this.map.addListener("idle", this._bounds.bind(this));
    this.map.addListener("click", this._handleClick.bind(this));
  }

  _handleClick(event) {
    this.props.router.push({
      pathname: "benches/new",
      query: this._coordsFromLatLng(event.latLng)
    });
  }

  _coordsFromLatLng(latLng) {
    return ({
      lat: latLng.lat(),
      lng: latLng.lng()
    });
  }

  _bounds() {
    const mapBounds = this.map.getBounds();
    const northEast = mapBounds.getNorthEast();
    const southWest = mapBounds.getSouthWest();
    const bounds = {
      northEast: { lat: northEast.lat(), lng: northEast.lng() },
      southWest: { lat: southWest.lat(), lng: southWest.lng() }
    };
    this.props.updateBounds(bounds);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  render() {
    return(
      <div id='map-container' ref='map'></div>
    );
  }
}

export default withRouter(BenchMap);
