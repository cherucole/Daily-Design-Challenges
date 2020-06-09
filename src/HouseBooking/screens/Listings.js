import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SharedElement } from 'react-navigation-shared-element';

import { ListingCard } from '../components/UI';
import { ScrollView } from 'react-native-gesture-handler';
export const Houses = [
  {
    id: 1,
    name: 'Lovren Apartment',
    price: 900,
    description: 'Double family house',
    reviews: 147,
    image: require('../assets/home1.jpg'),
    avatar1: require('../assets/passport1.png'),
    avatar2: require('../assets/passport2.jpg'),
    tags: ['air conditioned', 'Wi-Fi', 'bungalow'],
  },
  {
    id: 2,
    name: 'Cozy Flats',
    price: 1200,
    description: 'Cheap family house',
    reviews: 126,
    image: require('../assets/home3.jpg'),
    avatar1: require('../assets/passport1.png'),
    avatar2: require('../assets/passport2.jpg'),
    tags: ['heated', 'Wi-Fi', 'cheap', 'backyard'],
  },
  {
    id: 3,
    name: 'React Native',
    price: 1300,
    description: 'Double family house',
    reviews: 273,
    image: require('../assets/home5.jpg'),
    avatar1: require('../assets/passport.png'),
    avatar2: require('../assets/passport2.jpg'),
    tags: ['Air conditioned', 'Wi-Fi', 'Bungalow'],
  },
];

const Listings = props => {
  const { navigation } = props;

  const onPressHandler = ({ navigation, house }) => {
    navigation.navigate('Details', { house: house });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topNav}>
          <Text style={styles.heroText}>Find your flat</Text>
        </View>
        <View style={styles.topIcons}>
          <Ionicons name="ios-search" size={30} color="gray" />
          <MaterialCommunityIcons name="filter" size={30} color="gray" />
        </View>
      </View>
      <View>
        <Text style={styles.resText}>55 results in your area</Text>
      </View>
      <ScrollView
        style={{ marginHorizontal: 2 }}
        showsVerticalScrollIndicator={false}>
        {Houses.map(house => (
          <ListingCard
            key={house.id}
            image={house.image}
            name={house.name}
            price={house.price}
            description={house.description}
            reviews={house.reviews}
            avatar1={house.avatar1}
            avatar2={house.avatar2}
            tags={house.tags}
            onPressCard={() => onPressHandler({ navigation, house })}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default Listings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  topNav: {
    flex: 3.6,
  },
  topIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heroText: {
    fontSize: 30,
    fontWeight: '700',
    // color: '#0d47a1',
  },
  resText: {
    color: 'gray',
    fontWeight: '500',
    marginTop: 10,
    fontSize: 15,
    marginHorizontal: 25,
    marginBottom: 5,
  },
});
