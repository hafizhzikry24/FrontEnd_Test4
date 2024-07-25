
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { provideApolloClient } from '@vue/apollo-composable';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://sirefcode.hasura.app/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'content-type': 'application/json',
      'x-hasura-admin-secret': 'jw8y3lwW7Vk4HKuROjlbs3flnrYaDsE1vkqNqhtTgv3rIo8bC655Fx6WmSZk4KvO',
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export function provideApollo() {
  provideApolloClient(apolloClient);
}

export { apolloClient };
