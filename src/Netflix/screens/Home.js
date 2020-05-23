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
});
