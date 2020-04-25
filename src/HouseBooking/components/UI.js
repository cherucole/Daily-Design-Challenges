import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export const ListingCard = props => {
  return (
    <TouchableOpacity onPress={props.onPressCard}>
      <View style={styles.cardContainer}>
        <View style={styles.inforCard}>
          <View style={styles.card}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>
              €{props.price}/month
            </Text>
            <Text style={styles.description}>{props.description}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 5,
              }}>
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="star" size={15} color="#FC9632" />
                <FontAwesome name="star" size={15} color="#FC9632" />
                <FontAwesome name="star" size={15} color="#FC9632" />
                <FontAwesome name="star" size={15} color="#FC9632" />
                <FontAwesome name="star" size={15} color="#FC9632" />
              </View>
              <Text>{props.reviews} reviews</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.avatarContainer}>
                <Image
                  style={{ height: '100%', width: '100%' }}
                  source={props.avatar1}
                />
              </View>
              <View style={styles.avatarContainer}>
                <Image
                  style={{ height: '100%', width: '100%' }}
                  source={props.avatar2}
                />
              </View>
              <View
                style={{
                  ...styles.avatarContainer,
                  backgroundColor: '#e0e0e0',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>+99</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 1,
                marginVertical: 10,
              }}>
              {props.tags.map(tag => (
                <View key={tag} style={styles.tags}>
                  <Text style={styles.tagsText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground
            style={{ height: '100%', justifyContent: 'flex-end' }}
            source={props.image}>
            <View style={styles.name}>
              <LinearGradient
                ref={r => (this.gradiant = r)}
                locations={[0, 1.0]}
                colors={['rgba(0,0,0,0.05)', 'rgba(10,9,40,0.7)']}
                style={styles.linearGradient}>
                <View styles={{ width: '60%' }}>
                  <Text style={styles.nameText}>{props.name}</Text>
                </View>
                <View style={styles.mapIcon}>
                  <FontAwesome
                    name="location-arrow"
                    size={28}
                    color="#4A5EDF"
                  />
                </View>
              </LinearGradient>
            </View>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 20,
    height: 300,
    marginTop: 25,
    flexDirection: 'row',
  },
  inforCard: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 10,
  },
  imageContainer: {
    width: '60%',
    borderRadius: 15,
    overflow: 'hidden',
  },
  card: {
    height: '85%',
    borderRadius: 15,
    width: 180,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  name: {
    height: '25%',
  },
  mapIcon: {
    marginRight: 10,
    backgroundColor: '#f5f5f5',
    padding: 10,
    height: 45,
    width: 45,
    borderRadius: 30,
  },
  nameText: {
    fontSize: 23,
    fontWeight: '700',
    color: 'white',
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    paddingLeft: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 10,
    marginHorizontal: 3,
  },
  description: {
    fontSize: 15,
    fontWeight: '400',
    color: 'gray',
    marginVertical: 10,
  },
  tags: {
    backgroundColor: '#4A5EDF',
    marginHorizontal: 3,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 15,
    marginVertical: 3,
  },
  tagsText: {
    color: 'white',
    fontWeight: '500',
  },
});
