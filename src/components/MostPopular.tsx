import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/Entypo';
import {data, ListItemDataCardCompleted} from '../../utils/data/popularData';

interface ListItem {
  id: string;
  text: string;
  selected: boolean;
}

const MostPopular = () => {
  const [items, setItems] = useState<ListItem[]>(data);

  const handleSelectItem = (itemId: string) => {
    const updatedItems = items.map(item =>
      item.id === itemId
        ? {...item, selected: true}
        : {...item, selected: false},
    );
    setItems(updatedItems);
  };

  const renderItem = ({item}: {item: ListItem}) => (
    <TouchableOpacity
      style={[styles.item, item.selected && styles.selectedItem]}
      onPress={() => handleSelectItem(item.id)}>
      <View style={styles.textView}>
        <Text style={[styles.text, item.selected && styles.selectedText]}>
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  );

  interface ListItemCardCompletedProps {
    item: ListItemDataCardCompleted;
  }

  const ListItemCardCompleted: React.FC<ListItemCardCompletedProps> = ({
    item,
  }) => {
    return (
      <View style={[styles.card, {height: deviceHeight / 2.7}]}>
        <Image source={item.image} style={styles.imageCard} />
        <View style={styles.bigNames}>
          <Text style={styles.nameLarge}>Product Name</Text>
          <View style={styles.starView}>
            <Icons style={styles.star} name="star" size={20} color="black" />
            <Text style={styles.nameLarge}>{item.name}</Text>
            <Text style={styles.starLine}>|</Text>
            <Text style={styles.soldText}>4.6k Sold</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.ViewMoreTextCont}>
        <Text style={styles.todayText}>Most Popular</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.seeMoreText}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={ListItemDataCardCompleted}
        keyExtractor={(item, index) => item?.id ?? index.toString()}
        renderItem={({item}) => <ListItemCardCompleted item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
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
    resizeMode: 'contain',
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

export default MostPopular;
