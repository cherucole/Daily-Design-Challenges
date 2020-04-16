import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CartPage = props => {
  return (
    <View style={styles.container}>
      <Text>CartPage</Text>
    </View>
  );
};
export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
