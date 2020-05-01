import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { jobs } from './HomePage';

const CatListing = props => {
  let alljobs = [...jobs, ...jobs];
  const category = props.navigation.getParam('category');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="ios-arrow-back"
          color="black"
          size={30}
          onPress={() => props.navigation.goBack()}
        />
        <Image
          style={{ height: '100%', width: 30 }}
          source={require('../assets/notification.png')}
        />
      </View>
      <View style={{ paddingHorizontal: 25 }}>
        <Text style={styles.catName}>{category.name}</Text>
        <Text style={styles.openings}>44 Job Openings</Text>
      </View>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {alljobs.map(job => (
            <View style={styles.jobContainer}>
              <View style={styles.imageContainer}>
                <View style={styles.image}>
                  <Image style={styles.logo} source={job.logo} />
                </View>
              </View>
              <View style={{ flex: 3, marginRight: 20 }}>
                <View style={styles.job}>
                  <View style={{ width: '80%' }}>
                    <Text style={styles.jobText}>{job.job}</Text>
                  </View>

                  <MaterialIcons
                    name={job.liked ? 'bookmark' : 'bookmark-border'}
                    size={30}
                    color={job.liked ? '#ff4444' : '#78909c'}
                  />
                </View>
                <Text style={styles.location}>{job.location}</Text>
                <View style={styles.bottomRow}>
                  <View style={styles.pay}>
                    <Text style={styles.payText}>{job.pay}K Yearly</Text>
                  </View>
                  <Text style={styles.duration}>{job.days} days ago</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default CatListing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    backgroundColor: 'white',
    // paddingHorizontal: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  catName: {
    fontSize: 40,
    fontWeight: '700',
    marginVertical: 15,
  },
  openings: {
    fontSize: 22,
    fontWeight: '400',
    color: '#45526e',
    marginBottom: 10,
  },
  jobContainer: {
    height: 190,
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    paddingVertical: 30,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  job: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobText: {
    fontSize: 25,
    fontWeight: '600',
  },
  location: {
    fontSize: 20,
    fontWeight: '500',
    color: '#78909c',
    marginVertical: 10,
  },
  bottomRow: {
    position: 'absolute',
    bottom: -15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pay: {
    backgroundColor: '#eceff1',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  payText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#45526e',
  },
  duration: {
    color: '#78909c',
    fontSize: 16,
    fontWeight: '500',
  },
});
