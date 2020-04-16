import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomePage = props => {
  return (
    <View style={styles.container}>
      <Text>Sneakers HomePage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
