import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';

let data = [
  { id: 1, name: 'Arsenal', color: '#ff4444' },
  { id: 2, name: 'Liverpool', color: '#FF8800' },
  { id: 3, name: 'Chelsea', color: '#00C851' },
  { id: 4, name: 'Bayern', color: '#33b5e5' },
  { id: 5, name: 'Barca', color: '#CC0000' },
  { id: 6, name: 'BVB', color: '#2BBBAD' },
  { id: 7, name: 'Atleti', color: '#9933CC' },
  { id: 8, name: 'Juventus', color: '#ffff00' },
  { id: 9, name: 'PSG', color: 'tomato' },
  { id: 10, name: 'Lyon', color: '#311b92' },
  { id: 11, name: 'Napoli', color: '#ff4081' },
  { id: 12, name: 'Watford', color: '#3F729B' },
];

const marginGen = id => {
  if (id % 6 !== 0 && (id + 1) % 4 === 0) {
    return -150;
  }
  return 0;
};

const heightGen = id => {
  if (id % 4 === 0) {
    return 200;
  } else if (id % 2 === 0) {
    return 300;
  }
  return 150;
};

const marginLeft = id => {
  if (id % 4 === 0) {
    return '-50%';
  } else if (id % 2 === 0) {
    return 0;
  }
  return 0;
};

const Item = ({ item }) => {
  return (
    <View
      style={{
        // backgroundColor: item.color,
        width: item.id % 4 == 0 ? '100%' : '50%',
        height: heightGen(item.id),
        marginTop: marginGen(item.id),
        marginLeft: marginLeft(item.id),
      }}>
      <View
        style={{
          backgroundColor: item.color,
          margin: 2,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        }}>
        <Text>{item.name}</Text>
      </View>
    </View>
  );
};

const ColumnLayout = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.color}
      />
    </View>
  );
};
export default ColumnLayout;

const styles = StyleSheet.create({
  container: {
    // flexWrap: 'wrap', //makes content fit in the screen
    // flex: 1,
    paddingTop: 60,
    // flexDirection: 'row',
  },
});
