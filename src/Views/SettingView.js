import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingView = ({navigation}) => {
  const Data = [
    {
      id: 1,
      name: 'My Card Package',
      icon: (
        <Feather
          name="upload"
          size={20}
          color="black"
          style={{paddingHorizontal: 10}}
        />
      ),
      screenName: 'Home',
    },
    {
      id: 2,
      name: 'My Bank Details',
      icon: (
        <AntDesign
          name="bank"
          size={20}
          color="black"
          style={{paddingHorizontal: 10}}
        />
      ),
    },
    {
      id: 3,
      name: 'The Opportunity',
      icon: (
        <AntDesign
          name="bank"
          size={20}
          color="black"
          style={{paddingHorizontal: 10}}
        />
      ),
    },
    {
      id: 4,
      name: 'My Network',
      icon: (
        <Entypo
          name="network"
          size={20}
          color="black"
          style={{paddingHorizontal: 10}}
        />
      ),
    },
    {
      id: 5,
      name: 'My Support',
      icon: (
        <FontAwesome
          name="support"
          size={20}
          color="black"
          style={{paddingHorizontal: 10}}
        />
      ),
    },
    {
      id: 6,
      name: 'Terminate My Account',
      icon: (
        <MaterialCommunityIcons
          name="account-remove-outline"
          size={20}
          color="black"
          style={{paddingHorizontal: 10}}
        />
      ),
    },
  ];
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.mainContainer}>
        <View>
          <FlatList
            data={Data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate(item.screenName)}
                style={{
                  flexDirection: 'row',
                  marginLeft: 15,
                  marginTop: 23,
                  paddingVertical: 10,
                }}>
                {item.icon}
                <Text
                  style={{
                    paddingLeft: 10,
                    fontFamily: 'Dams-Bold',
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.midLine}></View>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingView;

const styles = StyleSheet.create({
  mainContainer: {},
  midLine: {
    width: '90%',
    height: 2,
    backgroundColor: 'black',
    opacity: 0.4,
    marginLeft: 18,
    marginTop: 0,
  },
});
