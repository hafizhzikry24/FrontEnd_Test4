
import gql from 'graphql-tag';

export const GET_ROUTES = gql`
  query getRoutes {
    your_routes_table_name {
      id
      distance
      latitude
      longitude
      subRoutes {
        id
        distance
        latitude
        longitude
        subRoutes {
          id
          distance
          latitude
          longitude
        }
      }
    }
  }
`;
