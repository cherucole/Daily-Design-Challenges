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
        <Image style={styles.image} source={props.image} />
        <View style={styles.title}>
          <Text numberOfLines={2} style={styles.text}>
            {props.title}
          </Text>
        </View>
        <View style={styles.metadata}>
          <View style={styles.time}>
            <Ionicons name="md-time" size={17} color="gray" />
            <Text style={styles.timeText}> mins</Text>
          </View>
          <Ionicons name="ios-heart-empty" color="white" size={26} />
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
    height: '50%',
    width: '110%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    transform: [{rotate: '-25deg'}],
  },
  title: {
    height: '18%',
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 2,
    color: '#3C0D31',
  },
});
