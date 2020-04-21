import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Image,
  TouchableHighlight,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
export const SectionHeader = props => {
  return (
    <>
      <Text style={styles.sectionText}>{props.name}</Text>
      <View style={styles.lineDivider} />
    </>
  );
};

export const games = [
  {
    name: 'Apex Legends',
    image: require('../assets/apexhd.jpg'),
    views: '257.3k',
  },
  {
    name: 'Overwatch',
    image: require('../assets/overwatch.jpeg'),
    views: '219.6k',
  },
  {
    name: 'Fortnite',
    image: require('../assets/fortnite.jpg'),
    views: '177.3k',
  },
  {
    name: 'Call of Duty',
    image: require('../assets/cod.jpg'),
    views: '107.3k',
  },
];
export const streams = [
  {
    name: 'DevaikuCS',
    image: require('../assets/ls1.jpg'),
    avatar: require('../assets/passport.png'),
    description: 'Pandora Weekly Tournament',
    category: 'Apex Legends',
    views: '56.8k',
  },
  {
    name: 'Cherucole',
    image: require('../assets/ls2.jpg'),
    avatar: require('../assets/passport.png'),
    description: 'Facebook Gamers Tournament',
    category: 'Fortnite',
    views: '46.8k',
  },
  {
    name: 'StreamNinja',
    image: require('../assets/ls1.jpg'),
    avatar: require('../assets/passport.png'),
    description: 'Pandora Weekly Tournament',
    category: 'Apex Legends',
    views: '36.8k',
  },
];

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
          colors={['rgba(0,0,0,0.50)', 'rgba(0,0,0,0.80)']}
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
      <View style={styles.contentContainer}>
        <SectionHeader name="Popular Categories" />
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 10 }}>
            {games.map(game => (
              <TouchableHighlight
                onPress={() =>
                  props.navigation.navigate('Details', {
                    game: game,
                    streams: streams,
                  })
                }>
                <View style={styles.thumbnails}>
                  <Image style={styles.thumbnailImage} source={game.image} />
                  <View>
                    <Text style={styles.gameName}>{game.name}</Text>
                    <View style={styles.metadata}>
                      <Ionicons name="md-eye" size={24} color="#bbdefb" />
                      <Text style={{ color: '#bbdefb' }}>
                        {game.views} viewers
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
          </ScrollView>
        </View>
        <SectionHeader name="Top Live Streamers" />
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 10 }}>
            {streams.map(stream => (
              <View style={styles.streamContainer}>
                <View
                  style={{
                    height: '73%',
                    width: '100%',
                  }}>
                  <ImageBackground
                    style={{ height: '100%', width: '100%' }}
                    source={stream.image}>
                    <LinearGradient
                      ref={r => (this.gradiant = r)}
                      locations={[0, 1.0]}
                      colors={['rgba(0,0,0,0.0)', 'rgba(0,0,0,0.60)']}
                      style={styles.linearGradientStream}>
                      <View style={styles.streamCount}>
                        <FontAwesome
                          name="dot-circle-o"
                          size={20}
                          color="red"
                        />

                        <Text style={styles.streamCountText}>
                          {stream.views} viewers
                        </Text>
                      </View>
                    </LinearGradient>
                  </ImageBackground>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    height: '100%',
                  }}>
                  <View
                    style={{
                      height: '27%',
                      width: 80,
                    }}>
                    <View style={styles.streamAvatar}>
                      <Image
                        style={styles.streamImage}
                        source={stream.avatar}
                      />
                    </View>
                  </View>
                  <View>
                    <Text style={styles.streamerName}>{stream.name}</Text>
                    <Text style={styles.streamDesc}>{stream.description}</Text>
                    <Text style={styles.streamCat}>{stream.category}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
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
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
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
    marginTop: 2,
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

  sectionText: {
    color: 'white',
    fontSize: 19,
    marginLeft: 25,
    marginTop: 20,
    fontWeight: '500',
  },
  lineDivider: {
    backgroundColor: 'white',
    height: 0.5,
    width: '50%',
    alignSelf: 'flex-end',
    marginTop: -10,
    marginBottom: 30,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#4651FF',
    borderTopRightRadius: 40,
    marginTop: -40,
    paddingTop: 10,
  },
  thumbnails: {
    backgroundColor: '#546BFF',
    marginHorizontal: 8,
    height: 250,
    width: 150,
    borderRadius: 5,
    overflow: 'hidden',
  },
  thumbnailImage: {
    height: '77%',
    width: '100%',
  },
  gameName: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  metadata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-around',
  },
  linearGradientStream: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  streamContainer: {
    marginHorizontal: 10,
    width: 320,
    height: 225,
    backgroundColor: '#546BFF',
    borderRadius: 4,
    overflow: 'hidden',
  },
  streamCount: {
    paddingTop: 130,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  streamCountText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 16,
  },
  streamAvatar: {
    height: '100%',
    width: '75%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  streamImage: {
    height: '80%',
    width: '80%',
    borderRadius: 200,
  },
  streamerName: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
  },
  streamDesc: {
    color: '#bbdefb',
    fontWeight: '600',
  },
  streamCat: {
    color: '#bbdefb',
    fontWeight: '500',
  },
});
