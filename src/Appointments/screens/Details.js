import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Details = props => {
  const item = props.navigation.getParam('item');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          paddingTop: 60,
          backgroundColor: '#2879FF',
          height: '40%',
          borderBottomRightRadius: 120,
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 25,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '57%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Ionicons
              name="md-arrow-back"
              size={25}
              color="white"
              onPress={() => props.navigation.goBack()}
            />
            <Text style={{ fontSize: 17, color: 'white', opacity: 0.8 }}>
              Appointment Request
            </Text>
          </View>
          <Entypo name="dots-two-vertical" size={25} color="white" />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 35,
              width: 220,
              fontWeight: '700',
              color: 'white',
            }}>
            {item.time}
          </Text>
        </View>
      </View>
      <View
        style={{ flexDirection: 'row', marginTop: -60, alignItems: 'center' }}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 35,
            overflow: 'hidden',
            borderWidth: 6,
            borderColor: 'white',
            marginLeft: 85,
          }}>
          <Image
            source={item.image}
            style={{ height: '100%', width: '100%' }}
          />
        </View>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: '#3FCDFF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            borderWidth: 5,
            borderColor: 'white',
            marginTop: 15,
            marginLeft: 30,
          }}>
          <Ionicons name="md-call" size={24} color="white" />
        </View>
      </View>
      <View
        style={{
          marginLeft: 60,
          marginRight: 40,
        }}>
        <View style={{ width: '55%', marginVertical: 20 }}>
          <Text style={{ fontSize: 35, fontWeight: '700' }}>{item.name}</Text>
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: '#7283a7',
            marginBottom: 10,
          }}>
          Comment:
        </Text>
        <Text style={{ fontSize: 17, lineHeight: 28 }}>
          Hello Dr. Peterson,
        </Text>
        <Text style={{ fontSize: 17, lineHeight: 28 }}>
          I am going to bring my complete red blood analysis with me
        </Text>
        <View
          style={{
            height: 80,
            backgroundColor: '#e0f7fa',
            justifyContent: 'center',
            marginTop: 20,
            borderRadius: 8,
          }}>
          <View
            style={{
              height: 65,
              borderLeftColor: '#00acc1',
              borderLeftWidth: 3,
              flexDirection: 'row',
              paddingLeft: 10,
              paddingTop: 5,
            }}>
            <MaterialIcons
              name="attach-file"
              size={30}
              color="#00acc1"
              style={{ transform: [{ rotate: '40deg' }] }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 17,
                  fontWeight: '500',
                  color: '#004d40',
                }}>
                Complete blood Count
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#004d40',
                  opacity: 0.7,
                }}>
                05 March 2020
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 30,
          justifyContent: 'space-between',
          marginTop: 40,
        }}>
        <View style={{ backgroundColor: '#256FFF', borderRadius: 25 }}>
          <Text
            style={{
              paddingHorizontal: 60,
              paddingVertical: 15,
              color: 'white',
              fontWeight: '600',
            }}>
            ACCEPT
          </Text>
        </View>
        <View style={{ backgroundColor: '#EBEFFA', borderRadius: 25 }}>
          <Text
            style={{
              paddingHorizontal: 28,
              paddingVertical: 15,
              color: '#2C3650',
              fontWeight: '600',
            }}>
            DECLINE
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
