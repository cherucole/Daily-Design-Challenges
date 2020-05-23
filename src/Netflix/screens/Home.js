import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
          <Text>Home</Text>
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
