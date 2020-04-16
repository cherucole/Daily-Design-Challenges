import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Cards, Thumbnail} from '../components/UI';

const HomePage = props => {
  const brands = [
    'Nike',
    'Adidas',
    'Air Jordan',
    'Puma',
    'Reebok',
    'Vans',
    'Skechers',
  ];

  const shoes = [
    {
      name: 'Air Max 270',
      brand: 'Nike',
      price: '$ 129.99',
      image: require('../assets/air1.png'),
      color: '#ff4444',
    },
    {
      name: 'Air Max 99',
      brand: 'Nike',
      price: '$ 99.99',
      image: require('../assets/air2.png'),
      color: '#0d47a1',
    },
    {
      name: 'Air Max Pro',
      brand: 'Nike',
      price: '$ 149.99',
      image: require('../assets/air3.png'),
      color: '#33b5e5',
    },
    {
      name: 'Air Max Lite',
      brand: 'Nike',
      price: '$ 39.99',
      image: require('../assets/air4.png'),
      color: '#00C851',
    },
    {
      name: 'Air Max Plus',
      brand: 'Nike',
      price: '$ 129.99',
      image: require('../assets/air5.png'),
      color: '#ffbb33',
    },
  ];

  const renderShoe = shoe => {
    return (
      <Text
        key={shoe}
        style={{
          ...styles.brands,
          color: brands[0] == shoe ? 'black' : '#bdbdbd',
          borderBottomColor: 'black',
        }}>
        {shoe}
      </Text>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.discover}>
          <Text style={styles.discoverText}>Discover</Text>
        </View>
        <View style={styles.icons}>
          <View style={styles.icon}>
            <Ionicons name="ios-search" size={26} color="black" />
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={26}
              color="black"
            />
          </View>
        </View>
      </View>
      <View style={styles.brands}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {brands.map(shoe => renderShoe(shoe))}
        </ScrollView>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.verticalContainer}>
          <Text style={styles.verticalText}>Upcoming</Text>
          <Text style={{...styles.verticalText, color: 'black'}}>Featured</Text>
          <Text style={styles.verticalText}>New</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {shoes.map(shoe => (
            <Cards
              key={shoe.name}
              image={shoe.image}
              color={shoe.color}
              title={shoe.name}
              price={shoe.price}
              brand={shoe.brand}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.more}>
        <Text style={styles.moreText}>More</Text>
        <Ionicons name="ios-arrow-round-forward" size={50} color="black" />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Thumbnail
          source={shoes[2].image}
          name={shoes[2].name}
          price={shoes[2].price}
        />
        <Thumbnail
          source={shoes[1].image}
          name={shoes[1].name}
          price={shoes[1].price}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  discover: {
    flex: 2.7,
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discoverText: {
    fontSize: 28,
    fontWeight: '700',
  },
  icon: {
    height: 44,
    width: 44,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brands: {
    marginVertical: 13,
    fontSize: 25,
    paddingHorizontal: 15,
    paddingRight: 20,
    fontWeight: '600',
  },
  mainContent: {
    flexDirection: 'row',
  },
  verticalContainer: {
    justifyContent: 'space-around',
  },
  verticalText: {
    transform: [{rotate: '-90deg'}],
    color: 'gray',
    fontWeight: '600',
    // fontSize: 15,
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  moreText: {
    fontSize: 26,
    fontWeight: '600',
  },
});

export default HomePage;
