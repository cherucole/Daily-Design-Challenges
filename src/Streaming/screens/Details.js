import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

const Details = props => {
  const game = props.navigation.getParam('game');
  const streams = props.navigation.getParam('streams');
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'red', height: '55%', width: '100%' }}>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={game.image}>
          <LinearGradient
            ref={r => (this.gradiant = r)}
            locations={[0, 1.0]}
            colors={['rgba(0,0,0,0.20)', 'rgba(10,9,40,0.9)']}
            style={styles.linearGradient}>
            <View
              style={{
                marginHorizontal: 25,
                paddingTop: 50,
                justifyContent: 'space-between',
                // backgroundColor: 'yellow',
                height: '100%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Ionicons
                  onPress={() => props.navigation.goBack()}
                  name="ios-arrow-round-back"
                  size={50}
                  color="white"
                />
                <Ionicons
                  onPress={() => props.navigation.goBack()}
                  name="ios-search"
                  size={35}
                  color="white"
                />
              </View>
              <View
                style={{
                  // backgroundColor: 'red',
                  height: '50%',
                }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={styles.tags}>
                    <Text style={{ color: 'white', fontWeight: '600' }}>
                      FPS
                    </Text>
                  </View>
                  <View style={{ ...styles.tags, width: 90 }}>
                    <Text style={{ color: 'white', fontWeight: '600' }}>
                      Shooter
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 45,
                    fontWeight: '700',
                    marginVertical: 8,
                    color: 'white',
                  }}>
                  {game.name}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="person" size={20} color="#bbdefb" />
                    <Text
                      style={{
                        fontSize: 16,
                        marginLeft: 6,
                        fontWeight: '500',
                        color: '#bbdefb',
                      }}>
                      10.7 M Followers
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 20,
                    }}>
                    <Ionicons name="md-eye" size={20} color="#bbdefb" />
                    <Text
                      style={{
                        fontSize: 16,
                        marginLeft: 6,
                        fontWeight: '500',
                        color: '#bbdefb',
                      }}>
                      {game.views} Viewers
                    </Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      backgroundColor: '#3643FF',
                      width: '40%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        paddingVertical: 10,
                        fontSize: 20,
                        color: 'white',
                        fontWeight: '600',
                      }}>
                      Following
                    </Text>
                  </View>
                  <Entypo
                    name="dots-three-vertical"
                    size={20}
                    color="#bbdefb"
                  />
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
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
  tags: {
    paddingVertical: 3,
    borderRadius: 30,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'white',
    marginRight: 20,
  },
});
