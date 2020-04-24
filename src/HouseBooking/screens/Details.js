import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Details = props => (
  <View style={styles.container}>
    <Text>Details</Text>
  </View>
);
export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
