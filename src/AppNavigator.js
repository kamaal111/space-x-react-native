import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Views/Home';
import LaunchList from './components/LaunchList';

const Views = {
  HomeScreen: { screen: Home },
  LaunchListScreen: { screen: LaunchList },
};

export default createAppContainer(
  createStackNavigator(Views, {
    initialRouteName: 'HomeScreen',
  }),
);
