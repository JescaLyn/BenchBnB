class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  updateMarkers(benches) {
    this.benches = benches;
    this._markersToRemove().forEach(marker => {
      this._removerMarker(marker);
    });
    this._benchesToAdd().forEach(bench => {
      this._createMarkerFromBench(bench);
    });
  }

  _benchesToAdd() {
    const currentBenchIds = this.markers.map(marker => marker.benchId);
    const benchesToAdd = [];
    Object.keys(this.benches).forEach(benchId => {
      if (!currentBenchIds.includes(parseInt(benchId))) {
        benchesToAdd.push(this.benches[benchId]);
      }
    });
    return benchesToAdd;
  }

  _createMarkerFromBench(bench) {
    const map = this.map;
    const marker = new google.maps.Marker({
      map,
      animation: google.maps.Animation.DROP,
      position: {lat: bench.lat, lng: bench.lng},
      benchId: bench.id
    });
    const benchInfo = `<section><span>Description: ${bench.description}</span><span>Latitude: ${bench.lat}</span><span>Longitude: ${bench.lng}</span></section>`;
    const infoWindow = new google.maps.InfoWindow({
      content: benchInfo
    });
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
    this.markers.push(marker);
  }

  _markersToRemove() {
    return this.markers.filter(marker => {
      if (this.benches[marker.benchId]) {
        return false;
      } else {
        return true;
      }
    });
  }

  _removerMarker(marker) {
    marker.setMap(null);
    this.markers.splice(this.markers.indexOf(marker), 1);
  }
}

export default MarkerManager;
