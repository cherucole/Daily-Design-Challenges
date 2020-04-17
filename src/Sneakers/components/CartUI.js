import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const CartItem = props => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.imageContainer, backgroundColor: props.color }}>
        <Image
          source={props.image}
          style={{
            height: '60%',
            width: '110%',
            transform: [{ rotate: '-20deg' }],
          }}
        />
      </View>
      <View style={styles.metadata}>
        <Text style={styles.name}>{props.name.toUpperCase()}</Text>
        <Text style={styles.price}>{props.price}</Text>
        <View style={styles.addOrder}>
          <AntDesign
            style={styles.buttons}
            name="minus"
            size={26}
            color="black"
          />
          <Text style={styles.quantity}>1</Text>
          <AntDesign
            style={styles.buttons}
            name="plus"
            size={26}
            color="black"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 160,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  imageContainer: {
    flex: 5,
    backgroundColor: 'black',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  metadata: {
    flex: 6,
  },
  addOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-between',
  },
  quantity: {
    fontSize: 25,
    fontWeight: '500',
  },
  buttons: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  name: {
    fontSize: 23,
  },
  price: {
    fontSize: 24,
    paddingVertical: 15,
    fontWeight: '700',
  },
});
