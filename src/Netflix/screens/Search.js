import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

let data = [
  { id: 1, name: 'Gibson', color: 'red' },
  { id: 2, name: 'Collins', color: 'blue' },
  { id: 3, name: 'Emmanuel', color: 'green' },
  { id: 4, name: 'Naomi', color: 'pink' },
  { id: 5, name: 'Mercy', color: 'yellow' },
  { id: 6, name: 'Vincent', color: 'orange' },
  { id: 7, name: 'Shaddy', color: 'grey' },
  { id: 8, name: 'Lenny', color: 'violet' },
  { id: 9, name: 'Mercy', color: 'tomato' },
  { id: 10, name: 'Vincent', color: 'maroon' },
  { id: 11, name: 'Shaddy', color: 'beige' },
  { id: 12, name: 'Lenny', color: 'indigo' },
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
