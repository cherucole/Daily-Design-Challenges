import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Cards = props => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            backgroundColor: props.color,
            borderRadius: 20,
            justifyContent: 'center',
            height: 30,
          }}>
          <Text
            style={{
              color: props.fontColor,
              paddingHorizontal: 15,
              fontWeight: '500',
            }}>
            {props.type}
          </Text>
        </View>
        <MaterialIcons name="bookmark-border" color="#bdbdbd" size={30} />
      </View>
      <View style={{ marginVertical: 15 }}>
        <Text style={{ fontSize: 27, fontWeight: '500' }}>{props.job}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          //   backgroundColor: 'red',
          flex: 1,
          alignItems: 'center',
        }}>
        <View>
          <View
            style={{ height: 35, flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ height: '100%', width: 35 }} source={props.logo} />
            <Text
              style={{ fontSize: 18, fontWeight: '600', marginHorizontal: 8 }}>
              {props.company}
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingLeft: 8,
            borderLeftWidth: 1,
            borderLeftColor: '#9e9e9e',
          }}>
          <Text style={{ fontSize: 16, color: '#9e9e9e', fontWeight: '600' }}>
            {props.time} days ago
          </Text>
        </View>
      </View>
    </View>
  );
};
export const CatCard = props => {
  return (
    <View
      style={{
        backgroundColor: props.backgroundColor,
        width: 112,
        marginRight: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: props.imageColor,
          height: 65,
          width: 65,
          marginBottom: 10,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{ height: '65%', width: '65%', tintColor: 'white' }}
          source={props.image}
        />
      </View>
      <Text style={{ fontWeight: '600', color: '#616161', fontSize: 16 }}>
        {props.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    height: 220,
    width: 250,
    marginRight: 23,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#7F8595',
    padding: 20,
  },
  text: {
    fontSize: 22,
  },
});
