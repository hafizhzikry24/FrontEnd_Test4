<template>
    <div id="map" style="height: 100%;"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  export default {
    name: 'InteractiveMap',
    props: {
      markers: Array,
    },
    mounted() {
      this.initMap();
    },
    watch: {
      markers: 'updateMarkers',
    },
    methods: {
      initMap() {
        this.map = L.map('map').setView([51.505, -0.09], 13);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(this.map);
      },
      updateMarkers() {
        if (this.markerGroup) {
          this.markerGroup.clearLayers();
        }
  
        this.markerGroup = L.layerGroup();
        this.markers.forEach((marker) => {
          const markerInstance = L.marker([marker.lat, marker.lng]).addTo(this.markerGroup);
          markerInstance.bindPopup(`<b>${marker.info.title}</b><br>${marker.info.details}`).openPopup();
        });
        this.markerGroup.addTo(this.map);
      },
    },
  };
  </script>
  
  <style scoped>
  #map {
    width: 100%;
    height: 500px;
  }
  </style>
  