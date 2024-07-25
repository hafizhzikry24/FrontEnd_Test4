
import gql from 'graphql-tag';

export const UPDATE_ROUTE = gql`
  mutation updateRoute($id: ID!, $distance: Float!) {
    updateRoute(id: $id, distance: $distance) {
      id
      distance
    }
  }
`;