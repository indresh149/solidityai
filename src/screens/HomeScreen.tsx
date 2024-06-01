import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import SpecialOffers from '../components/SpecialOffers';
import CircularImageSelector from '../components/CircularSelectors';
import MostPopular from '../components/MostPopular';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <SearchBar />
      <SpecialOffers />
      <CircularImageSelector />
      <MostPopular />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
