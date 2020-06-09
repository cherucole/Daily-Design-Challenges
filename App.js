import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import StreamNavigator from './src/navigation/StreamNavigator';
import HouseNavigator from './src/navigation/HouseBookingNavigator';
import JobNavigator from './src/navigation/JobNavigation';
import AppointmentNav from './src/navigation/AppointmentNav';
import NetflixNavigator from './src/navigation/NetflixNavigator';

const App = props => {
  return <HouseNavigator />;
};

export default App;
