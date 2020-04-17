import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const CartItem = props => {
  return (
    <View style={{ ...styles.container, backgroundColor: props.color }}>
      <Text>Item</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
});
