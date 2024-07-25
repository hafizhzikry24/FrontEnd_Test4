<!-- src/views/MapView.vue -->
<template>
  <div>
    <InteractiveMap :markers="markers" />
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import InteractiveMap from '@/components/InteractiveMap.vue';
import { useRouteStore } from '@/store';

export default {
  name: 'MapView',
  components: { InteractiveMap },
  setup() {
    const routeStore = useRouteStore();
    const markers = ref([]);

    // Watch for changes in routes and update markers accordingly
    watch(
      () => routeStore.routes,
      (routes) => {
        markers.value = routes.map((route) => ({
          lat: route.latitude, // Assuming routes have latitude and longitude properties
          lng: route.longitude,
          info: {
            title: `Route ${route.id}`,
            details: `Distance: ${route.distance}`,
          },
        }));
      },
      { immediate: true }
    );

    // Fetch routes when the component is mounted
    routeStore.fetchRoutes();

    return {
      markers,
    };
  },
};
</script>
