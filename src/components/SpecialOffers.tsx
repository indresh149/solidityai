import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');

const data = [
  {
    id: 1,
    discount: '30%',
    title: "Today's Special!",
    description: 'Get discount for every order, only valid for today',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    discount: '25%',
    title: 'Limited Offer!',
    description: 'Hurry up! Limited time offer.',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    discount: '20%',
    title: 'Flash Sale!',
    description: "Don't miss out on today's flash sale.",
    image: 'https://via.placeholder.com/150',
  },
];

const SpecialOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: {
    nativeEvent: {layoutMeasurement: {width: any}; contentOffset: {x: number}};
  }) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.floor(event.nativeEvent.contentOffset.x / slideSize);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Special Offers</Text>
        <TouchableOpacity>
          <Text style={styles.headerLink}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        {data.map(item => (
          <View style={styles.card} key={item.id}>
            <View style={styles.textContainer}>
              <Text style={styles.discount}>{item.discount}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <Image
              source={require('../../assets/images/offer1.png')}
              style={styles.image}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {backgroundColor: index === activeIndex ? 'black' : 'gray'},
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  headerLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FC6C85',
  },
  scrollView: {
    width: screenWidth,
  },
  card: {
    backgroundColor: '#ffe6e6',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FC6C85',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: screenWidth * 0.8,
    marginHorizontal: screenWidth * 0.1,
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
  },
  discount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FC6C85',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#FC6C85',
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    color: '#FC6C85',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default SpecialOffers;
