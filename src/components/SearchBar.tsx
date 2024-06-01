import React from 'react';
import {View, TextInput, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color="gray" style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <Icon name="sliders" size={24} color="black" style={styles.filterIcon} />
    </View>
  );
};

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: deviceHeight / 15,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  filterIcon: {
    marginLeft: 10,
  },
});

export default SearchBar;
