import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Listings = props => (
  <View style={styles.container}>
    <Text>Listings</Text>
  </View>
);
export default Listings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
