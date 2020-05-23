import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Home = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/michael.jpg')}
        style={styles.imageBackground}>
        <LinearGradient
          colors={['rgba(0,0,0,0.2)', 'rgba(8, 9, 12,1)']}
          start={{ x: 0, y: 0.4 }}
          end={{ x: 0, y: 1.3 }}
          locations={[0.1, 0.5]}
          style={styles.linearGradient}>
          <View
            style={{
              paddingTop: 60,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons
                name="keyboard-backspace"
                size={28}
                color="#F71131"
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '700',
                  marginLeft: 10,
                }}>
                Home
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Feather name="heart" size={24} color="white" />
              <Feather
                name="share"
                size={24}
                color="white"
                style={{ marginLeft: 20 }}
              />
            </View>
          </View>
          <View style={{ marginTop: 500 }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: '700',
                alignSelf: 'center',
              }}>
              NEW - SEASON 1
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: '800',
                color: 'white',
                alignSelf: 'center',
                marginVertical: 15,
                transform: [{ scaleY: 1.8 }], //changes items to be longer in height
              }}>
              THE LAST DANCE
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 68,
                justifyContent: 'space-between',
                marginTop: 15,
              }}>
              <View style={styles.movieMetadata}>
                <Text style={{ fontWeight: '600' }}>Popular with friends</Text>
              </View>
              <View style={styles.movieMetadata}>
                <Text style={{ fontWeight: '600' }}>12+</Text>
              </View>
              <View
                style={{ ...styles.movieMetadata, backgroundColor: '#FFB34B' }}>
                <Text style={{ fontWeight: '900' }}>
                  IMDb <Text style={{ fontWeight: '600' }}>9.4</Text>
                </Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 13,
                  color: 'white',
                  fontWeight: '600',
                  alignSelf: 'center',
                  marginVertical: 15,
                }}>
                {`2020  •  Documentary  •  Biography`}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#F71131',
                width: 160,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 30,
                alignSelf: 'center',
                borderRadius: 2,
              }}>
              <MaterialIcons name="play-arrow" size={24} color="white" />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: '800',
                  marginLeft: 5,
                }}>
                Next Episode
              </Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  movieMetadata: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 2,
  },
});
