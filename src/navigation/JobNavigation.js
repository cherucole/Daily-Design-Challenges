import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../JobSearch/screens/HomePage';
import Details from '../HouseBooking/screens/Details';
import Settings from '../JobSearch/screens/Settings';
import Profile from '../JobSearch/screens/Profile';
import Favorites from '../JobSearch/screens/Favorites';
import Add from '../JobSearch/screens/Add';

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor, focused }) => (
          <Foundation name="home" color={tintColor} size={28} />
        ),
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ tintColor, focused }) => (
          <MaterialIcons name="bookmark-border" color={tintColor} size={30} />
        ),
      },
    },
    // Add: {
    //   screen: Add,
    //   navigationOptions: {
    //     tabBarLabel: 'Add',
    //     tabBarIcon: ({ tintColor, focused }) => (
    //       <Ionicons name="ios-add-circle" color={tintColor} size={30} />
    //     ),
    //   },
    // },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor, focused }) => (
          <AntDesign name="setting" color={tintColor} size={28} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name="md-person" color={tintColor} size={29} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      // showLabel: false,
      activeTintColor: '#0B75FE',
      inactiveTintColor: '#bdbdbd',
      style: {
        backgroundColor: '#f5f5f5',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.7,
        elevation: 5,
        height: 55,
        paddingTop: 5,
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
