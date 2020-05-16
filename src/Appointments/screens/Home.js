import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = props => (
  <View style={styles.container}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Ionicons name="ios-menu" size={30} color="#000" />
      <AntDesign name="calendar" size={30} color="#000" />
    </View>
    <View>
      <Text style={{ color: '#3F729B', fontSize: 18, marginTop: 20 }}>
        Welcome Back!
      </Text>
      <Text
        style={{
          fontSize: 35,
          fontWeight: '700',
          marginTop: 10,
          marginBottom: 25,
        }}>
        Dr. Peterson
      </Text>
    </View>
    <View
      style={{
        backgroundColor: 'red',
        height: 280,
        borderRadius: 24,
        padding: 20,
      }}>
      <Text>card</Text>
    </View>
    <Text
      style={{
        marginTop: 35,
        marginBottom: 15,
        color: '#3F729B',
        fontSize: 17,
      }}>
      Next Appointments
    </Text>

    <View>
      <ScrollView>
        {[1, 2, 3].map(num => (
          <View
            key={num.toString()}
            style={{
              backgroundColor: 'gray',
              height: 90,
              marginBottom: 15,
              borderRadius: 30,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text>Patients</Text>
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
});
