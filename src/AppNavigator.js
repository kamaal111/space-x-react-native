import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Screens/Home';
import LaunchList from './Screens/LaunchList';
import LaunchDetails from './Screens/LaunchDetails';
import Rocket from './Screens/Rocket';

const Views = {
  HomeScreen: { screen: Home },
  LaunchListScreen: { screen: LaunchList },
  LaunchDetailsScreen: { screen: LaunchDetails },
  RocketScreen: { screen: Rocket },
};

export default createAppContainer(
  createStackNavigator(Views, {
    initialRouteName: 'HomeScreen',
  }),
);
