import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import { baseUrl } from '../config';

const httpLink = createHttpLink({ uri: `${baseUrl}/graphql` });
const client = new ApolloClient({ link: httpLink, cache: new InMemoryCache() });

export default function ApolloApp({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
