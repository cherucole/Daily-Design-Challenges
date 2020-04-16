import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailPage = props => {
  return (
    <View style={styles.container}>
      <Text>DetailPage</Text>
    </View>
  );
};
export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
