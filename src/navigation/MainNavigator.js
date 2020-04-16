import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';

import SneakersHomePage from '../Sneakers/screens/HomePage';
import CartPage from '../Sneakers/screens/CartPage';
import DetailPage from '../Sneakers/screens/DetailPage';
import Favorites from '../Sneakers/screens/Favorites';
import Profile from '../Sneakers/screens/Profile';

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: SneakersHomePage,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor, focused}) => (
          <Foundation name="home" color={tintColor} size={30} />
        ),
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor, focused}) => (
          <AntDesign
            name={focused ? 'heart' : 'hearto'}
            color={tintColor}
            size={28}
          />
        ),
      },
    },
    Cart: {
      screen: CartPage,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor, focused}) => (
          <Foundation name="home" color={tintColor} size={30} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor, focused}) => (
          <Foundation name="home" color={tintColor} size={30} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#EA4C88',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: '#FAFAFA',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
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
    DetailPage: DetailPage,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(MainNavigator);
