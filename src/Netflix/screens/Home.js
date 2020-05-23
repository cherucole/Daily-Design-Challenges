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
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <MaterialIcons
                name="keyboard-backspace"
                size={28}
                color="#F71131"
              />
              <Text style={styles.headerText}>Home</Text>
            </View>
            <View style={styles.headerRight}>
              <Feather name="heart" size={24} color="white" />
              <Feather
                name="share"
                size={24}
                color="white"
                style={{ marginLeft: 20 }}
              />
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.newSeasonText}>NEW - SEASON 1</Text>
            <Text style={styles.movieName}>THE LAST DANCE</Text>
            <View style={styles.metadataContainer}>
              <View style={styles.movieMetadata}>
                <Text style={styles.metaText}>Popular with friends</Text>
              </View>
              <View style={styles.movieMetadata}>
                <Text style={styles.metaText}>12+</Text>
              </View>
              <View
                style={{ ...styles.movieMetadata, backgroundColor: '#FFB34B' }}>
                <Text style={styles.imdb}>
                  IMDb <Text style={styles.metaText}>9.4</Text>
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.tags}>
                {`2020  •  Documentary  •  Biography`}
              </Text>
            </View>
            <LinearGradient
              colors={[
                'rgba(0,0,0,0.1)',
                'rgba(246, 18, 49,1)',
                'rgba(0,0,0,0.1)',
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.breaker}
            />
            <View style={styles.nextButton}>
              <MaterialIcons name="play-arrow" size={24} color="white" />
              <Text style={styles.nextSeasonText}>Next Episode</Text>
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
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginLeft: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
  },
  content: {
    marginTop: 470,
  },
  newSeasonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    alignSelf: 'center',
  },
  movieName: {
    fontSize: 30,
    fontWeight: '800',
    color: 'white',
    alignSelf: 'center',
    marginVertical: 15,
    transform: [{ scaleY: 1.8 }], //changes items to be longer in height
  },
  metadataContainer: {
    flexDirection: 'row',
    marginHorizontal: 68,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  movieMetadata: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 2,
  },
  imdb: {
    fontWeight: '900',
  },
  tags: {
    fontSize: 13,
    color: 'white',
    fontWeight: '600',
    alignSelf: 'center',
    marginVertical: 15,
  },
  breaker: {
    height: 2,
    marginTop: 5,
    marginBottom: 20,
    width: 300,
    alignSelf: 'center',
  },
  nextButton: {
    backgroundColor: '#F71131',
    width: 160,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 34,
    alignSelf: 'center',
    borderRadius: 2,
  },
  nextSeasonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
    marginLeft: 5,
  },
  metaText: {
    fontWeight: '600',
  },
});
