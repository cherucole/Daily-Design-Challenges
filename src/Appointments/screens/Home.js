import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

export const data = [
  {
    name: 'Ora Murray',
    time: '09 Jan 2020, 8am - 10am',
    image: require('../assets/pass2.jpg'),
  },
  {
    name: 'Louis Patterson',
    time: '09 Jan 2020, 8am - 10am',
    image: require('../assets/pass3.jpg'),
  },
  {
    name: 'Dorothy Nelson',
    time: '09 Jan 2020, 8am - 10am',
    image: require('../assets/pass1.png'),
  },
  {
    name: 'Collins Cheruiyot',
    time: '10 Jan 2020, 8am - 10am',
    image: require('../assets/pass4.jpg'),
  },
];
const Home = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Ionicons name="ios-menu" size={30} color="#2C3650" />
      <AntDesign name="calendar" size={30} color="#2C3650" />
    </View>
    <View>
      <Text style={{ color: '#3F729B', fontSize: 18, marginTop: 20 }}>
        Welcome Back!
      </Text>
      <Text style={styles.docName}>Dr. Peterson</Text>
    </View>
    <TouchableHighlight
      style={styles.mainCard}
      onPress={() => props.navigation.navigate('Details', { item: data[0] })}>
      <View style={{ height: '100%', overflow: 'hidden', borderRadius: 24 }}>
        <View
          style={{ backgroundColor: '#297AFF', height: '33%', padding: 20 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.cardMeta}>Appointment Request</Text>
            <Entypo name="dots-two-vertical" size={20} color="white" />
          </View>
          <View style={styles.cardTime}>
            <AntDesign name="clockcircle" color="white" size={24} />
            <Text style={styles.cardTimeText}>12 Jan 2020, 8am - 10am</Text>
          </View>
        </View>
        <View style={styles.imageRow}>
          <View style={styles.imageNameContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={data[0].image}
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View style={{ width: '53%' }}>
              <Text style={{ fontSize: 25, fontWeight: '500' }}>
                {data[0].name}
              </Text>
            </View>
          </View>
          <View>
            <Feather
              name="info"
              size={34}
              color="#297AFF"
              style={{ marginRight: 10 }}
            />
          </View>
        </View>
        <View style={styles.cta}>
          <View style={styles.accept}>
            <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>
              ACCEPT
            </Text>
          </View>
          <View style={styles.decline}>
            <Text style={{ fontSize: 18, color: '#2C3650', fontWeight: '600' }}>
              DECLINE
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
    <Text style={styles.nextApp}>Next Appointments</Text>

    <View>
      <ScrollView>
        {data.slice(1).map(item => (
          <View key={item.name} style={styles.appointments}>
            <View style={styles.imageApp}>
              <Image
                source={item.image}
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View style={{ width: '60%' }}>
              <Text style={styles.nameApp}>{item.name}</Text>
              <Text style={styles.appTime}>{item.time}</Text>
            </View>
            <View>
              <Entypo name="dots-two-vertical" size={20} color="#2C3650" />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  </View>
);
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#F3F6FF',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  docName: {
    fontSize: 35,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 25,
    color: '#2C3650',
  },
  mainCard: {
    backgroundColor: 'white',
    height: 280,
    borderRadius: 24,
    shadowColor: '#2C3650',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.33,
    shadowRadius: 5.62,
    elevation: 4,
  },
  cardTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  cardMeta: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    opacity: 0.7,
  },
  cardTimeText: {
    fontSize: 21,
    fontWeight: '500',
    color: 'white',
    marginLeft: 15,
  },
  imageRow: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageNameContainer: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    height: 80,
    width: 80,
    borderRadius: 30,
    overflow: 'hidden',
    marginRight: 20,
  },
  cta: {
    paddingHorizontal: 20,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accept: {
    backgroundColor: '#297AFF',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 20,
  },
  decline: {
    backgroundColor: '#EBEFFA',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  nextApp: {
    marginTop: 35,
    marginBottom: 15,
    color: '#3F729B',
    fontSize: 17,
  },
  appointments: {
    backgroundColor: 'white',
    height: 90,
    marginBottom: 15,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    // borderColor: '#297AFF',
    // borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageApp: {
    height: 65,
    width: 65,
    borderRadius: 20,
    overflow: 'hidden',
  },
  nameApp: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#2C3650',
  },
  appTime: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3F729B',
  },
});
