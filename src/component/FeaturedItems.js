import {View, Image, Text, TouchableOpacity} from 'react-native';
import maggie from '../img/maggie.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {appColor} from '../config/constants';
import LinearGradient from 'react-native-linear-gradient';

const Card = ({itemName, measure, rating, price}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        width: 150,
        height: 220,
        borderColor: appColor.shadow,
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'space-between',
        elevation: 3,
      }}>
      <View style={{alignItems: 'center'}}>
        <Image source={maggie} style={{width: 70, height: 70}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>{measure}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 50,
            backgroundColor: appColor.rating,
            justifyContent: 'space-around',
            borderRadius: 5,
          }}>
          <AntDesign name="star" color={'#fff'} />
          <Text style={{color: '#fff'}}>{rating}</Text>
        </View>
      </View>
      <View>
        <Text
          style={{color: appColor.textColor, fontWeight: 'bold', fontSize: 18}}>
          {itemName}
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: appColor.textColor, fontWeight: 'bold'}}>
          ₹ {price}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: appColor.blue,
            borderRadius: 5,
            width: 60,
            justifyContent: 'space-around',
            padding: 3,
          }}>
          <TouchableOpacity>
            <Text style={{color: '#fff'}}>-</Text>
          </TouchableOpacity>
          <Text style={{color: '#fff'}}>1</Text>
          <TouchableOpacity>
            <Text style={{color: '#fff'}}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const FeaturedItems = () => {
  return (
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <Card itemName={'Thanda'} measure={'Bottle'} rating={'4.4'} price={20} />
      <Card itemName={'Aata'} measure={'kilo'} rating={'4.4'} price={12} />
    </View>
  );
};

export default FeaturedItems;
