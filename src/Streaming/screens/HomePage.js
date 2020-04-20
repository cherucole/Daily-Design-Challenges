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
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const HomePage = props => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/home.jpg')}>
        <LinearGradient
          ref={r => (this.gradiant = r)}
          locations={[0, 1.0]}
          colors={['rgba(0,0,0,0.10)', 'rgba(0,0,0,0.80)']}
          style={styles.linearGradient}>
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
          <Text style={styles.heroText}>Explore the</Text>
          <Text style={styles.heroText}>world of games</Text>
          <View style={styles.searchRow}>
            <Ionicons name="ios-search" size={25} color="#bbdefb" />
            <View style={styles.searchPlaceholder}>
              <Text style={styles.searchText}>Search for any game</Text>
            </View>
          </View>
        </LinearGradient>
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
    height: 300,
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
  heroText: {
    fontSize: 35,
    fontWeight: '700',
    color: 'white',
    marginLeft: 25,
  },
  searchRow: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 15,
  },
  searchPlaceholder: {
    borderBottomColor: '#bbdefb',
    borderBottomWidth: 1,
    width: '80%',
    marginLeft: 20,
  },
  searchText: {
    color: '#bbdefb',
    fontSize: 18,
  },
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
