import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Search = props => (
  <View style={styles.container}>
    <Text>Search</Text>
  </View>
);
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
