import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailPage = props => {
  const shoe = props.navigation.getParam('shoe');
  const allShoes = props.navigation.getParam('allShoes');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ ...styles.imageHeader, backgroundColor: shoe.color }}>
        <View style={styles.header}>
          <Ionicons
            onPress={() => props.navigation.goBack()}
            name="ios-arrow-round-back"
            size={50}
            color="white"
          />
          <Text style={styles.brand}>{shoe.brand}</Text>
          <Ionicons name="md-heart-empty" size={29} color="white" />
        </View>
        <View>
          <View>
            <Image style={styles.mainImage} source={shoe.image} />
          </View>
        </View>
      </View>
      <View style={styles.imageRow}>
        {allShoes.slice(0, 4).map(shoe => (
          <View key={shoe.name} style={styles.carousel}>
            <Image style={styles.carouselImages} source={shoe.image} />
          </View>
        ))}
      </View>
      <View style={styles.namePrice}>
        <Text style={styles.name}>{shoe.name}</Text>
        <Text style={styles.name}>{shoe.price}</Text>
      </View>
      <Text style={{ marginHorizontal: 20, fontSize: 20, color: '#757575' }}>
        The ever-evolving family of {shoe.name} is forever changing the look and
        the feel of tomorrow. Every Air Max has a story; this is where to find
        yours.
      </Text>
      <Text style={styles.moreDetails}>MORE DETAILS</Text>
      <View style={styles.sizeRegion}>
        <View>
          <Text style={{ fontWeight: '700', fontSize: 22 }}>Size</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{ fontWeight: '600', fontSize: 22, marginHorizontal: 20 }}>
            UK
          </Text>
          <Text style={{ fontSize: 22, color: '#bdbdbd', fontWeight: '600' }}>
            USA
          </Text>
        </View>
      </View>
      <View style={{ ...styles.button, backgroundColor: shoe.color }}>
        <Text style={{ fontSize: 22, color: 'white', fontWeight: '500' }}>
          ADD TO CART
        </Text>
      </View>
    </View>
  );
};
export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageHeader: {
    paddingTop: 50,
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 150,
    marginBottom: 50,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    fontSize: 22,
    fontWeight: '500',
    color: 'white',
  },
  mainImage: {
    height: 200,
    width: 350,
    transform: [{ rotate: '-20deg' }],
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#37474F',
    paddingBottom: 10,
  },
  carousel: {
    backgroundColor: '#e0e0e0',
    margin: 7,
    padding: 2,
    borderRadius: 3,
  },
  carouselImages: {
    width: 80,
    height: 50,
  },
  namePrice: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
  },
  moreDetails: {
    textDecorationLine: 'underline',
    marginLeft: 20,
    marginVertical: 15,
    fontWeight: '500',
    fontSize: 18,
  },
  sizeRegion: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginVertical: 20,
    // backgroundColor: 'red',
  },
  button: {
    height: 42,
    borderRadius: 6,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
});
