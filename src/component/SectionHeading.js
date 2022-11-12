import {View, Text} from 'react-native';
import {appColor} from '../config/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SectionHeading = ({title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <Text
        style={{fontSize: 18, fontWeight: 'bold', color: appColor.textColor}}>
        {title}
      </Text>
      <AntDesign name="right" size={15} color={appColor.textColor} />
    </View>
  );
};

export default SectionHeading;
