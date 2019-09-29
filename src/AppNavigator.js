import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Screens/Home';
import LaunchList from './Screens/LaunchList';
import LaunchDetails from './Screens/LaunchDetails';

const Views = {
  HomeScreen: { screen: Home },
  LaunchListScreen: { screen: LaunchList },
  LaunchDetailsScreen: { screen: LaunchDetails },
};

export default createAppContainer(
  createStackNavigator(Views, {
    initialRouteName: 'HomeScreen',
  }),
);
