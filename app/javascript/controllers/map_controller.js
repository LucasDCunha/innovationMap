import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    markers: Array
  }

  connect() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXNkY3ByZWYiLCJhIjoiY2xuNHc5Mmo5MDJzdTJpcGpxNWowdzM4NSJ9.YvT9a0Rt4VcP7KztDvfZow';
    this.map = new mapboxgl.Map({
      container: this.element,
      style: 'mapbox://styles/mapbox/streets-v12',
    });
    this.#addMarkersToMap()
    this.#fitMapToMarkers()
  }
  #addMarkersToMap() {
    this.markersValue.forEach((marker) => {
      const popup = new mapboxgl.Popup().setHTML(marker.info_window_html)
      new mapboxgl.Marker({
        color: "red",
        draggable: false
        })
        .setLngLat([ marker.lng, marker.lat ])
        .setPopup(popup)
        .addTo(this.map)
    })
  }

  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds()
    this.markersValue.forEach(marker => bounds.extend([ marker.lng, marker.lat ]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })
  }
}