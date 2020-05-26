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
      <View style={styles.blueHeader}>
        <View style={styles.headerNav}>
          <View style={styles.headerLeft}>
            <Ionicons
              name="md-arrow-back"
              size={25}
              color="white"
              onPress={() => props.navigation.goBack()}
            />
            <Text style={styles.headerTitle}>Appointment Request</Text>
          </View>
          <Entypo name="dots-two-vertical" size={25} color="white" />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      </View>
      <View style={styles.imageRow}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.callContainer}>
          <Ionicons name="md-call" size={24} color="white" />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
        <Text style={styles.comment}>Comment:</Text>
        <Text style={styles.commentText}>Hello Dr. Peterson,</Text>
        <Text style={styles.commentText}>
          I am going to bring my complete red blood analysis with me
        </Text>
        <View style={styles.attachment}>
          <View style={styles.attachRow}>
            <MaterialIcons
              name="attach-file"
              size={30}
              color="#00acc1"
              style={{ transform: [{ rotate: '40deg' }] }}
            />
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.fileName}>Complete blood Count</Text>
              <Text style={styles.attachmentDate}>05 March 2020</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cta}>
        <View style={styles.accept}>
          <Text style={styles.acceptText}>ACCEPT</Text>
        </View>
        <View style={{ ...styles.accept, backgroundColor: '#EBEFFA' }}>
          <Text style={styles.declineText}>DECLINE</Text>
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
  blueHeader: {
    paddingTop: 60,
    backgroundColor: '#2879FF',
    height: '40%',
    borderBottomRightRadius: 120,
  },
  headerNav: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    width: '57%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 17,
    color: 'white',
    opacity: 0.8,
  },
  timeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 35,
    width: 220,
    fontWeight: '700',
    color: 'white',
  },
  imageRow: {
    flexDirection: 'row',
    marginTop: -60,
    alignItems: 'center',
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 35,
    overflow: 'hidden',
    borderWidth: 6,
    borderColor: 'white',
    marginLeft: 85,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  callContainer: {
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
  },
  content: {
    marginLeft: 60,
    marginRight: 40,
  },
  nameContainer: {
    width: '55%',
    marginVertical: 20,
  },
  nameText: {
    fontSize: 35,
    fontWeight: '700',
  },
  comment: {
    fontSize: 15,
    fontWeight: '500',
    color: '#7283a7',
    marginBottom: 10,
  },
  commentText: {
    fontSize: 17,
    lineHeight: 28,
  },
  attachment: {
    height: 80,
    backgroundColor: '#e0f7fa',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 8,
  },
  attachRow: {
    height: 65,
    borderLeftColor: '#00acc1',
    borderLeftWidth: 3,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  fileName: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: '500',
    color: '#004d40',
  },
  attachmentDate: {
    fontSize: 16,
    fontWeight: '500',
    color: '#004d40',
    opacity: 0.7,
  },
  cta: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
    marginTop: 40,
  },
  accept: {
    backgroundColor: '#256FFF',
    borderRadius: 25,
  },
  acceptText: {
    paddingHorizontal: 60,
    paddingVertical: 15,
    color: 'white',
    fontWeight: '600',
  },
  declineText: {
    paddingHorizontal: 28,
    paddingVertical: 15,
    color: '#2C3650',
    fontWeight: '600',
  },
});
