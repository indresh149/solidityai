import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ComingSoon from '../components/ComingSoon';

const CartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ComingSoon />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartScreen;