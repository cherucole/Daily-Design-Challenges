import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  StatusBar,
  Image,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const HomePage = props => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/home.jpg')}>
        <View style={styles.rowMenu}>
          <Entypo name="list" size={45} color="white" />
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarImage}
                source={require('../assets/passport.png')}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <Text>HomePage</Text>
      <Button
        title="Go To Details"
        onPress={() => props.navigation.navigate('Details')}
      />
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 250,
  },
  rowMenu: {
    flexDirection: 'row',
    paddingTop: 50,
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  avatarContainer: {
    height: 55,
    width: 55,
    borderRadius: 50,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#4285F4',
  },
  avatar: {
    height: '95%',
    width: '95%',
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    height: '100%',
    width: '100%',
  },
});
