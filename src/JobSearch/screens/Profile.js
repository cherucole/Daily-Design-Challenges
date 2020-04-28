import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = props => (
  <View style={styles.container}>
    <Text>Profile</Text>
  </View>
);
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
