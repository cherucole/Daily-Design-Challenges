import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobDetail = props => (
  <View style={styles.container}>
    <Text>JobDetail</Text>
  </View>
);
export default JobDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
