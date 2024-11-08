import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import React from 'react';
import {baseGestureHandlerProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';

const Details = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView>
        <View style={{marginHorizontal: 20}}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 22,
                color: '#3d85c6',
              }}>
              NFC Cards
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '400',
                fontSize: 20,
                color: 'black',
                paddingTop: 5,
              }}>
              TAP, CONNECT, IMPRESS
            </Text>
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 22,
                color: '#3d85c6',
                paddingTop: 8,
              }}>
              Personal Business Card
            </Text>
          </View>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: '500',
              fontSize: 17,
              color: 'black',
              paddingVertical: 10,
            }}>
            Introducing the Future of Visiting Cards: Unveil the future of
            networking with our smart Business Card- your gateway to efficient,
            modern, and impactiu professional connections. Say goodbye to
            traditional paper business cards and hello to a new era of
            networking sophistication.
          </Text>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card1gold.png')}
                />
              </View>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card1silver.png')}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card2gold.png')}
                />
              </View>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card2.png')}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card3dold.png')}
                />
              </View>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card3silver.png')}
                />
              </View>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 22,
                  color: '#3d85c6',
                  paddingTop: 5,
                }}>
                ADD-ON CARDS
              </Text>
            </View>
            <Text
              style={{
                textAlign: 'left',
                fontWeight: '500',
                fontSize: 17,
                color: 'black',
                paddingVertical: 15,
              }}>
              Gift a add on card to your spouse, child, parent or a family
              member and enable them also to stand out in the crowd. It offers
              all features of the primary card. However all rewards from the
              business will be credited to the primary card holders account only
              and the add-on card holder (by default) shall be considered as the
              legitimate nominee of the said business cards
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card1gold.png')}
                />
              </View>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card1silver.png')}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card2gold.png')}
                />
              </View>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card2.png')}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingBottom:10}}>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card3dold.png')}
                />
              </View>
              <View style={{flex: 1}}>
                <Image
                  style={styles.imgStyling}
                  source={require('../assets/Card3silver.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  imgStyling: {
    width: 170,
    height: 90,
    justifyContent: 'space-around',
    padding: 5,
    margin: 8,
    borderRadius: 7,
  },
});
