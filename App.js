import React from 'react';

import AppNavigator from './src/AppNavigator';
import ApolloApp from './src/ApolloApp';

export default function App() {
  return (
    <ApolloApp>
      <AppNavigator />
    </ApolloApp>
  );
}
