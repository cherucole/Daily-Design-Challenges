import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Cards = props => {
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          ...styles.items,
          backgroundColor: props.color,
          shadowColor: props.color,
        }}>
        <View style={styles.metadata}>
          <Text style={styles.timeText}>{props.brand.toUpperCase()}</Text>
          <Ionicons name="ios-heart-empty" color="white" size={29} />
        </View>
        <View style={styles.title}>
          <Text numberOfLines={2} style={styles.text}>
            {props.title.toUpperCase()}
          </Text>
          <Text style={styles.price}>{props.price}</Text>
        </View>
        <Image style={styles.image} source={props.image} />
        <View>
          <Ionicons
            style={styles.bottomArrow}
            name="ios-arrow-round-forward"
            color="white"
            size={49}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    height: 400,
    backgroundColor: 'red',
  },
  items: {
    marginHorizontal: 20,
    height: 340,
    width: 240,
    borderRadius: 22,
    margin: 12,
    marginBottom: 20,
    // shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    // borderColor: '#333',
    // borderWidth: 0.3,
  },
  image: {
    marginTop: 20,
    height: '50%',
    width: '110%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    transform: [{rotate: '-25deg'}],
  },
  metadata: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
  },
  title: {
    height: '10%',
    // justifyContent: 'center',
    paddingHorizontal: 2,
    // backgroundColor: 'blue',
  },
  text: {
    paddingLeft: 15,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    // marginTop: 2,
    color: 'white',
  },
  price: {
    fontSize: 16,
    paddingLeft: 15,
    marginTop: 10,
    color: 'white',
    fontWeight: '600',
  },
  timeText: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 5,
  },
  bottomArrow: {
    alignSelf: 'flex-end',
    paddingRight: 25,
    marginTop: 10,
  },
});
