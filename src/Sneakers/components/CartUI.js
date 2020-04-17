import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const CartItem = props => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.imageContainer }}>
        <View
          style={{
            height: 135,
            width: 150,
            borderRadius: 30,
            backgroundColor: props.color,
          }}>
          <View style={{ marginTop: -30, marginLeft: -25 }}>
            <Image
              source={props.image}
              style={{
                height: 125,
                width: 200,
                transform: [{ rotate: '-30deg' }],
              }}
            />
          </View>
        </View>
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
    marginVertical: 20,
    marginHorizontal: 20,
  },
  imageContainer: {
    flex: 5,
    marginRight: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'flex-end',
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
