import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconHeart from 'react-native-vector-icons/AntDesign';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.name}>Lorem ipsum</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Icon
          name="notifications-outline"
          size={24}
          color="black"
          style={styles.icon}
        />
        <IconHeart name="hearto" size={24} color="black" />
      </View>
    </View>
  );
};

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: height / 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 15,
    color: 'black',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
});

export default Header;
