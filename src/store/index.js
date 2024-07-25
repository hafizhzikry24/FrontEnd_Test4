
import { defineStore } from 'pinia';
import { apolloClient } from '@/apollo';
import { GET_ROUTES } from '@/graphql/queries';
import { UPDATE_ROUTE } from '@/graphql/mutations';
import { calculateTotalDistance } from '@/utils/calculateDistance';

export const useRouteStore = defineStore('routes', {
  state: () => ({
    routes: [],
    loading: false,
  }),
  actions: {
    async fetchRoutes() {
      this.loading = true;
      try {
        const { data } = await apolloClient.query({ query: GET_ROUTES });
        this.routes = data.your_routes_table_name; 
      } catch (error) {
        console.error('Error fetching routes:', error);
      } finally {
        this.loading = false;
      }
    },
    async updateRoute(route) {
      try {
        await apolloClient.mutate({
          mutation: UPDATE_ROUTE,
          variables: { id: route.id, distance: route.distance },
        });
      } catch (error) {
        console.error('Error updating route:', error);
      }
    },
  },
  getters: {
    totalDistance: (state) => state.routes.reduce((acc, route) => acc + calculateTotalDistance(route), 0),
  },
});
