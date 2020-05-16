import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from '../Appointments/screens/Home';
import Details from '../Appointments/screens/Details';

const MainNavigator = createStackNavigator(
  {
    Home: HomePage,
    Details: Details,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(MainNavigator);
