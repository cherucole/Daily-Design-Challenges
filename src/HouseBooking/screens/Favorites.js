import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favorites = props => (
  <View style={styles.container}>
    <Text>Favorites</Text>
  </View>
);
export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
