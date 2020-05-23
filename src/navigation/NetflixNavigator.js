import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../Netflix/screens/Home';
import Details from '../Netflix/screens/Details';
import Search from '../Netflix/screens/Search';
import Profile from '../Netflix/screens/Profile';
import Favorites from '../Netflix/screens/Favorites';

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, tintColor }) => (
          <Foundation name="home" color={tintColor} size={28} />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={28} />
        ),
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: 'Likes',
        tabBarIcon: ({ focused, tintColor }) => (
          <AntDesign
            name={focused ? 'heart' : 'hearto'}
            color={tintColor}
            size={26}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, tintColor }) => (
          <Ionicons name="md-person" color={tintColor} size={28} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#F71131',
      inactiveTintColor: '#4D5058',
      style: {
        backgroundColor: '#08090C',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.7,
        elevation: 5,
      },
    },
  },
);

const MainNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
    Details: Details,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(MainNavigator);
