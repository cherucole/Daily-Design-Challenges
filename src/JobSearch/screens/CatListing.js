import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CatListing = props => (
  <View style={styles.container}>
    <Text>CatListing</Text>
  </View>
);
export default CatListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
