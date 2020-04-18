import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { CartItem } from '../components/CartUI';
import { shoes } from '../screens/HomePage';

const CartPage = props => {
  return (
    <View style={styles.container}>
      <Ionicons
        onPress={() => props.navigation.goBack()}
        style={{ paddingLeft: 20 }}
        name="ios-arrow-round-back"
        size={50}
        color="black"
      />
      <View style={styles.header}>
        <Text style={styles.myCartText}>My Cart</Text>
        <Text style={styles.totalText}>Total: 5 items</Text>
      </View>
      <ScrollView>
        {shoes.map(shoe => (
          <CartItem
            unique={shoe.name}
            color={shoe.color}
            image={shoe.image}
            name={shoe.name}
            price={shoe.price}
          />
        ))}
      </ScrollView>
      <View>
        <View style={styles.total}>
          <Text>TOTAL</Text>
          <Text style={styles.totalText}>$498.89</Text>
        </View>
        <View style={styles.button}>
          <Text style={{ ...styles.totalText, color: 'white' }}>
            PLACE ORDER
          </Text>
        </View>
      </View>
    </View>
  );
};
export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#bdbdbd',
    // marginBottom: 10,
  },
  myCartText: {
    fontSize: 28,
    fontWeight: '700',
  },
  totalText: {
    fontSize: 18,
    fontWeight: '600',
  },
  total: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    // marginVertical: 15,
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#bdbdbd',
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#ff4444',
    height: 42,
    borderRadius: 6,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
});
