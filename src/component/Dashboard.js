import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import logo from '../img/subrat.jpg';
import img1 from '../img/img1.jpg';
import dashboardimg from '../img/dashboardimg.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {appColor} from '../config/constants';
import SectionHeading from './SectionHeading';
import CategoryItems from './CategoryItems';
import Search from './Search';
import FeaturedItems from './FeaturedItems';
import LinearGradient from 'react-native-linear-gradient';

const Dashboard = () => {
  return (
    <LinearGradient
      colors={[appColor.backColor1, appColor.backColor2, appColor.backColor3]}
      style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <ScrollView style={{margin: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: appColor.textColor,
                }}>
                Hi, Subrata
              </Text>
              <Text
                style={{
                  color: appColor.textColor,
                }}>
                119, Convent Road, Rayagada, Odisha.
              </Text>
            </View>
            <View>
              <Image
                source={logo}
                style={{width: 50, height: 50, borderRadius: 25}}
              />
            </View>
          </View>
          <Search />
          <Image
            source={dashboardimg}
            style={{width: '100%', borderRadius: 15, marginVertical: 10}}
          />
          <SectionHeading title="Categories" />
          <CategoryItems />
          <SectionHeading title="Featured Product" />
          <FeaturedItems />
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: appColor.blue,
            alignItems: 'center',
            padding: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <View>
            <Text style={{color: '#fff'}}>2 items</Text>
            <Text style={{color: '#fff'}}>₹ 32</Text>
          </View>
          <View
            style={{
              width: '50%',
              alignItems: 'center',
              color: '#fff',
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              View Cart
            </Text>
          </View>
          <AntDesign name="caretright" size={25} color="#fff" />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Dashboard;
