import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LaunchList from './components/LaunchList';

const Views = {
  LaunchListScreen: { screen: LaunchList },
};

export default createAppContainer(
  createStackNavigator(Views, {
    initialRouteName: 'LaunchListScreen',
  }),
);
