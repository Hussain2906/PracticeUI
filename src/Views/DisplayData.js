import { SafeAreaView, StyleSheet, Text, View, Animated , TouchableOpacity} from 'react-native'
import { useRef } from 'react';
import React from 'react'


const DisplayData = ({ route, navigation }) => {
    const { formData } = route.params; 
    
  const scale = useRef(new Animated.Value(1)).current;
    const handlePressIn = () => {
        Animated.spring(scale, {
          toValue: 1.3,
          friction: 3,
          tension: 100,
          useNativeDriver: true,
        }).start();
      };
    
      // Handle press out (hover effect)
      const handlePressOut = () => {
        Animated.spring(scale, {
          toValue: 1,
          friction: 3,
          tension: 100,
          useNativeDriver: true,
        }).start();
      };
    return (
        <SafeAreaView>
      <View style={styles.mainContainer} >
        <Text style={styles.textBox}>Name: {formData.name}</Text>
        <Text style={styles.textBox}>Middle Name: {formData.mName}</Text>
        <Text style={styles.textBox}>Last Name: {formData.LName}</Text>
        <Text style={styles.textBox}>Email: {formData.email}</Text>
      </View>
      <Animated.View style={{transform: [{scale}], marginLeft:140}}>
                <TouchableOpacity
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  style={[styles.button, styles.refreshButton]}
                  onPress={()=>navigation.goBack()}>
                  <Text style={styles.refreshText}>Go Back</Text>
                </TouchableOpacity>
              </Animated.View>
      </SafeAreaView>
    );
  };
  

export default DisplayData

const styles = StyleSheet.create({
    textBox:{
        fontSize:19,
        fontWeight:"500",
        color: "#F5F5DC",
        marginHorizontal:15,
        marginVertical:10,
        padding:20,
        textAlign:"left",
        backgroundColor:"#0E2F44",
        borderRadius:30
    },
    mainContainer:{
        backgroundColor:"#AFEEEE",
        borderWidth:3,
        borderColor:"black",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    button: {
      borderRadius: 30,
      backgroundColor: '#0E2F44',
      width: 120,
      height: 40,
      marginTop: 30,
    },
    refreshText:{
        fontSize:16,
        textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
    elevation: 5,
    color: '#F5F5DC',
    }
})