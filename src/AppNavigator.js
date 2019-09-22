import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './components/Home';
import LaunchList from './components/LaunchList';
import LaunchDetails from './components/LaunchDetails';

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
