import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './Home';
import Friends from './Friends';

const RootStack = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends}
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;