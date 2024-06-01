interface ListItem {
  id: string;
  text: string;
  selected: boolean;
}

const data: ListItem[] = [
  {id: '1', text: 'All', selected: false},
  {id: '2', text: 'Clothes', selected: false},
  {id: '3', text: 'Shoes', selected: false},
  {id: '4', text: 'Bags', selected: false},
];

interface ListItemDataCardCompleted {
  id?: string;
  image?: any;
  name?: string;
}

const ListItemDataCardCompleted: ListItemDataCardCompleted[] = [
  {
    id: '1',
    image: require('../../assets/images/scroll.png'),
    name: '3.2',
  },
  {
    id: '2',
    image: require('../../assets/images/scroll.png'),
    name: '3.2',
  },
  {
    id: '3',
    image: require('../../assets/images/scroll.png'),
    name: '3.2',
  },
];

export {data, ListItemDataCardCompleted};
