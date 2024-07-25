<!-- src/components/Map.vue -->
<template>
    <div id="map" style="height: 100%;"></div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  
  export default {
    name: 'Map',
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const map = L.map('map').setView([51.505, -0.09], 13);
  
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
        }).addTo(map);
  
     
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
  