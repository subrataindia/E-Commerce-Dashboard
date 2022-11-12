import {FlatList, View, Text, Image} from 'react-native';
import img1 from '../img/img1.png';

const categoryItems = [
  {title: 'vegetables'},
  {title: 'Fruits'},
  {title: 'Beverages'},
  {title: 'Dairy'},
];
const CategoryItems = () => {
  return (
    <View>
      <FlatList
        horizontal
        data={categoryItems}
        renderItem={({item}) => (
          <View style={{width: 105, alignItems: 'center'}}>
            <Image source={img1} />
            <Text style={{textAlign: 'center'}}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
export default CategoryItems;
