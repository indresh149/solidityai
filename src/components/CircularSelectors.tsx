import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type ListItems = {
  id: number;
  image: any;
  label: string;
  nav: string;
};
const datas: ListItems[] = [
  {
    id: 1,
    image: require('../../assets/icons/clothes.png'),
    label: 'Clothes',
    nav: 'Clothes',
  },
  {
    id: 2,
    image: require('../../assets/icons/shoe.png'),
    label: 'Shoes',
    nav: 'Shoes',
  },
  {
    id: 3,
    image: require('../../assets/icons/bag.png'),
    label: 'Bags',
    nav: 'Bags',
  },
];

const CircularImageSelector: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.containerRow}>
      {datas.map((item, index) => (
        <View key={item.id} style={styles.itemContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.nav);
              setSelectedIndex(index);
            }}
            style={[
              styles.circle,
              {borderColor: selectedIndex === index ? 'pink' : 'transparent'},
            ]}>
            <Image source={item.image} style={styles.image} />
          </TouchableOpacity>
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  itemContainer: {
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
  },
  circle: {
    width: deviceWidth * 0.15,
    height: deviceHeight * 0.07,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    backgroundColor: '#FC6C8521',
  },
  image: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  item: {
    height: 40,
    padding: 10,
    marginTop: 10,
    marginStart: 20,
    marginLeft: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedItem: {
    backgroundColor: '#FC6C85',
  },
  ViewMoreTextCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  seeMoreText: {
    fontSize: 15,
    color: '#FC6C85',
    fontWeight: 'bold',
  },
  todayText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  card: {
    alignSelf: 'center',
    marginLeft: deviceWidth / 25,
    marginStart: deviceWidth / 22,
    marginEnd: deviceWidth / 40,
    borderRadius: 25,
    borderColor: '#ddd',
    marginTop: 10,
    marginBottom: 10,
  },
  imageCard: {
    width: deviceWidth / 2.3,
    height: deviceHeight / 4,
    borderRadius: 25,
  },
  nameLarge: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  bigNames: {
    marginTop: 10,
  },
  textView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: 'white',
  },
  text: {
    fontSize: 15,
    color: 'black',
  },
  starView: {
    flexDirection: 'row',
  },
  star: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  starLine: {
    width: 20,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    color: 'black',
  },
  soldText: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    color: 'black',
  },
});

export default CircularImageSelector;
