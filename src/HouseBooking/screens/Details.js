import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SharedElement } from 'react-navigation-shared-element';

const Details = props => {
  const house = props.navigation.getParam('house');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={{ height: '55%' }}>
        <SharedElement id={house.id}>
          <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={house.image}>
            <View style={{ height: 50, marginBottom: 10 }}>
              <LinearGradient
                locations={[0, 1.0]}
                colors={['rgba(10,9,40,0.8)', 'rgba(0,0,0,0)']}
                style={styles.linearGradient}
              />
            </View>
            <View style={styles.headerNav}>
              <View style={styles.priceContainer}>
                <Text style={styles.priceText}>€{house.price}/month</Text>
              </View>
              <Ionicons
                onPress={() => props.navigation.goBack()}
                style={{ marginTop: -5, transform: [{ rotate: '-45deg' }] }}
                name="md-add"
                size={38}
                color="white"
              />
            </View>
          </ImageBackground>
        </SharedElement>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{house.name}</Text>
        <View style={styles.metadata}>
          <View style={styles.livingRoom}>
            <Text style={styles.roomsText}>Living room</Text>
            <Text style={styles.dimensionsText}>80 sqft</Text>
          </View>
          <View style={styles.bedRoom}>
            <Text style={styles.roomsText}>Bedroom</Text>
            <Text style={styles.dimensionsText}>20 sqft</Text>
          </View>
          <View style={{ width: '30%' }}>
            <Text style={styles.roomsText}>Bathroom</Text>
            <Text style={styles.dimensionsText}>12 sqft</Text>
          </View>
        </View>
        <View style={styles.desc}>
          <Text numberOfLines={4} style={styles.descText}>
            Secluded in the heart of Ampthill, is this spectacular four bedroom
            detached home with a wonderful private garden and located down a
            private road. Ground Floor: Upon entering the property you are
            greeted by a spacious entrance
          </Text>
          <Text style={styles.readMore}>Read More</Text>
        </View>
        <View style={styles.callToAction}>
          <View style={styles.like}>
            <Ionicons name="md-heart-empty" size={26} color="#4A5EDF" />
          </View>
          <View style={styles.book}>
            <Text style={styles.bookText}>Book Now</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

Details.sharedElements = navigation => {
  const house = navigation.getParam('house');
  return [house.id];
};
export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  headerNav: {
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceContainer: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#4A5EDF',
  },
  priceText: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'white',
  },
  infoContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  name: {
    marginHorizontal: 25,
    paddingVertical: 30,
    fontSize: 30,
    fontWeight: '700',
  },
  metadata: {
    marginHorizontal: 25,
    flexDirection: 'row',
    marginBottom: 5,
  },
  livingRoom: {
    width: '28%',
    borderRightColor: 'gray',
    borderRightWidth: 1,
    marginRight: '6%',
  },
  bedRoom: {
    width: '28%',
    borderRightColor: 'gray',
    borderRightWidth: 1,
    marginRight: '6%',
  },
  roomsText: {
    fontSize: 16,
    fontWeight: '600',
  },
  dimensionsText: {
    color: 'gray',
    marginVertical: 7,
  },
  desc: {
    marginHorizontal: 25,
    marginVertical: 20,
  },
  readMore: {
    color: '#4A5EDF',
    fontWeight: '700',
    marginVertical: 8,
    textDecorationLine: 'underline',
  },
  callToAction: {
    marginHorizontal: 40,
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
  },
  like: {
    backgroundColor: '#e0e0e0',
    width: 60,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  book: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#4A5EDF',
    height: 45,
    justifyContent: 'center',
  },
  bookText: {
    fontSize: 22,
    fontWeight: '500',
    paddingHorizontal: 40,
    color: 'white',
  },
  descText: {
    fontSize: 15,
    lineHeight: 20,
  },
});
