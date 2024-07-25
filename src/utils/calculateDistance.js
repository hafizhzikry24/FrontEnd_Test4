
export function calculateTotalDistance(route) {
    if (!route.subRoutes || route.subRoutes.length === 0) {
      return route.distance;
    }
  
    return route.distance + route.subRoutes.reduce((acc, subRoute) => acc + calculateTotalDistance(subRoute), 0);
  }
  