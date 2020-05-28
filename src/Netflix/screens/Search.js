import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

let data = [
  { id: 1, name: 'Gibson', color: '#ff4444' },
  { id: 2, name: 'Collins', color: '#FF8800' },
  { id: 3, name: 'Emmanuel', color: '#00C851' },
  { id: 4, name: 'Naomi', color: '#33b5e5' },
  { id: 5, name: 'Mercy', color: '#CC0000' },
  { id: 6, name: 'Vincent', color: '#2BBBAD' },
  { id: 7, name: 'Shaddy', color: '#9933CC' },
  { id: 8, name: 'Lenny', color: '#ffff00' },
  { id: 9, name: 'Mercy', color: 'tomato' },
  { id: 10, name: 'Vincent', color: '#311b92' },
  { id: 11, name: 'Shaddy', color: '#ff4081' },
  { id: 12, name: 'Lenny', color: '#3F729B' },
];

const marginGen = id => {
  if (id % 6 !== 0 && (id + 1) % 4 == 0) {
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

const Item = ({ item }) => {
  return (
    <View
      style={{
        // backgroundColor: item.color,
        width: item.id % 4 == 0 ? '100%' : '50%',
        height: heightGen(item.id),
        marginTop: marginGen(item.id),
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

const Search = props => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map(item => (
          <Item item={item} /> //can also be <Item {...{ item }} />
        ))}
      </View>
    </ScrollView>
  );
};
export default Search;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap', //makes content fit in the screen
    // flex: 1,
    paddingTop: 60,
    flexDirection: 'row',
  },
});
