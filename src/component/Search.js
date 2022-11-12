import {View, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {appColor} from '../config/constants';

const Search = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <Feather
        name="search"
        size={20}
        style={{marginLeft: 15, marginRight: 5}}
        color={appColor.search}
      />
      <TextInput placeholder="Search" />
    </View>
  );
};

export default Search;
