<!-- src/components/Popup.vue -->
<template>
    <div class="popup">
      <h3>{{ info.title }}</h3>
      <p>{{ info.details }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Popup',
    props: {
      info: Object,
    },
  };
  </script>
  
  <style scoped>
  .popup {
    background: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }
  </style>
  