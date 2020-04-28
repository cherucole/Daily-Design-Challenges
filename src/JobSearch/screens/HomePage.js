import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Cards, CatCard } from '../components/UI';

export const jobs = [
  {
    id: 1,
    company: 'Google',
    job: 'Senior Product Designer',
    type: 'Full-time jobs',
    days: 3,
    logo: require('../assets/google.png'),
    color: '#fbe9e7',
    fontColor: '#ff7043',
  },
  {
    id: 2,
    company: 'Airbnb',
    job: 'Visual Product Designer',
    type: 'Internship',
    days: 5,
    logo: require('../assets/air.png'),
    color: '#b2dfdb',
    fontColor: '#26a69a',
  },
  {
    id: 3,
    company: 'KFC',
    job: 'Frontend Engineer',
    type: 'Contract',
    days: 4,
    logo: require('../assets/kfc.png'),
    color: '#b3e5fc',
    fontColor: '#29b6f6',
  },
];
export const Categories = [
  {
    name: 'Design',
    backgroundColor: '#b3e5fc',
    imageColor: '#29b6f6',
    image: require('../assets/design.png'),
  },
  {
    name: 'Developer',
    backgroundColor: '#fbe9e7',
    imageColor: '#ff7043',
    image: require('../assets/coding.png'),
  },
  {
    name: 'Business',
    backgroundColor: '#b2dfdb',
    imageColor: '#26a69a',
    image: require('../assets/wallet.png'),
  },
  {
    name: 'Office',
    backgroundColor: '#b3e5fc',
    imageColor: '#29b6f6',
  },
];

const HomePage = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          height: 30,
          marginBottom: 20,
        }}>
        <Image
          style={{ height: '100%', width: 30 }}
          source={require('../assets/notification.png')}
        />
      </View>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.heroText}>Find your Job</Text>
      </View>
      <View
        style={{
          backgroundColor: '#F1F4F9',
          height: 45,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 20,
          borderRadius: 10,
          marginBottom: 5,
        }}>
        <Ionicons
          style={{ paddingRight: 10 }}
          name="ios-search"
          size={30}
          color="gray"
        />

        <Text style={{ fontSize: 22, color: '#7F8595' }}>Search...</Text>
      </View>
      <View style={styles.sections}>
        <Text style={styles.sectionText}>Popular Search</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {jobs.map(job => (
            <Cards
              key={job.id}
              logo={job.logo}
              company={job.company}
              time={job.days}
              job={job.job}
              type={job.type}
              color={job.color}
              fontColor={job.fontColor}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.sections}>
        <Text style={styles.sectionText}>Categories</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <View style={{ flex: 1, marginBottom: 30 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Categories.map(category => (
            <CatCard
              backgroundColor={category.backgroundColor}
              name={category.name}
              imageColor={category.imageColor}
              image={category.image}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
    backgroundColor: '#FFFFFF',
  },
  heroText: {
    fontSize: 36,
    fontWeight: '700',
    // color: '#0d47a1',
  },
  sections: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 25,
  },
  seeAll: {
    fontSize: 19,
    fontWeight: '500',
    textDecorationLine: 'underline',
    color: '#7F8595',
  },
  sectionText: {
    fontSize: 24,
    fontWeight: '600',
  },
});
