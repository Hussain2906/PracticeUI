import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Alert,
} from 'react-native';
import React, {useState, useRef} from 'react';

const DataForm = ({navigation}) => {
  const [name, setName] = useState('');
  const [mName, setMName] = useState('');
  const [LName, setLName] = useState('');
  const [email, setEmail] = useState('');

  const scale = useRef(new Animated.Value(1)).current;

  // Handle submit data
 

  // Handle refresh (clear form)
  const handleRefresh = () => {
    setName('');
    setMName('');
    setLName('');
    setEmail('');
  };

  // Handle press in (hover effect)
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
// Validation for Email 
  const emailValidation = (email)=>{
    if(email.trim() === ''){
        return 'Email can not be Empty'
    }
    const emailPattern = /^\S+@\S+\.\S+$/;
    if(!emailPattern.test(email)){
        return "Email must be entered properly"
    }
    if(email.length<2){
        return 'Please Enter a valid Email'
    }
    return null
  }
//   Validation for Name and other Fields 
  const validateFields = (fieldName, fieldValue) => {
    if (fieldValue.trim() === '') {
      return `${fieldName} can'not be Empty`;
    }
    const namePattern = /^[A-Za-z]$/;
    if (['name', 'mName', 'LName'].includes(fieldName)) {
      if (!namePattern.test(fieldValue)) {
        return 'Name should not Contain Special Characters';
      }
      if (fieldValue.length < 2) {
        return 'Enter Valid name';
      }
    }

    return null;
  };
  const handleSubmitData = () => {
    const formData = {
      name,
      mName,
      LName,
      email,
    };

  
    

    const nameError = validateFields('Name', name);
    const mNameError = validateFields('Middle Name', mName);
    const LNameError = validateFields('Last Name', LName);
    const emailError = emailValidation(email)
    // Check if any error exists and display it
    if (nameError) {
      Alert.alert("Validation Error", nameError, [{ text: "OK" }]);
      return;
    } else if (mNameError) {
      Alert.alert("Validation Error", mNameError, [{ text: "OK" }]);
      return;
    } else if (LNameError) {
      Alert.alert("Validation Error", LNameError, [{ text: "OK" }]);
      return;
    } else if (emailError) {
      Alert.alert("Validation Error", emailError, [{ text: "OK" }]);
      return;
    }
    return navigation.navigate('DisplayData', {formData});
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView>
        <View style={styles.Form}>
          <View style={styles.inputField}>
            <View style={styles.namePack}>
              <Text style={styles.labelText}>Name :-</Text>
            </View>
            <TextInput
              style={styles.InputBox}
              placeholder="Enter Your Name"
              placeholderTextColor={'black'}
              value={name}
              onChangeText={msg => setName(msg)}
            />

            <View style={styles.namePack}>
              <Text style={styles.labelText}>Middle Name :-</Text>
            </View>
            <TextInput
              style={styles.InputBox}
              placeholder="Enter Middle Name"
              placeholderTextColor={'black'}
              value={mName}
              onChangeText={midName => setMName(midName)}
            />

            <View style={styles.namePack}>
              <Text style={styles.labelText}>Last Name :-</Text>
            </View>
            <TextInput
              style={styles.InputBox}
              placeholder="Enter Last Name"
              placeholderTextColor={'black'}
              value={LName}
              onChangeText={lastName => setLName(lastName)}
            />

            <View style={styles.namePack}>
              <Text style={styles.labelText}>Email :-</Text>
            </View>
            <TextInput
              style={styles.InputBox}
              placeholder="Enter Email ID"
              placeholderTextColor={'black'}
              value={email}
              onChangeText={Email => setEmail(Email)}
            />

            <View style={styles.buttonContainer}>
              {/* Submit button with hover effect */}
              <Animated.View style={{transform: [{scale}]}}>
                <TouchableOpacity
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  style={styles.button}
                  onPress={handleSubmitData}>
                  <Text style={styles.submitText}>Submit Data</Text>
                </TouchableOpacity>
              </Animated.View>

              {/* Refresh button with hover effect */}
              <Animated.View style={{transform: [{scale}]}}>
                <TouchableOpacity
                  onPressIn={handlePressIn}
                  onPressOut={handlePressOut}
                  style={[styles.button, styles.refreshButton]}
                  onPress={handleRefresh}>
                  <Text style={styles.refreshText}>Refresh All</Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DataForm;

const styles = StyleSheet.create({
  Form: {
    flexDirection: 'column',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#AFEEEE',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  InputBox: {
    height: 60,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  namePack: {
    marginTop: 5,
    backgroundColor: '#0E2F44',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    width: 120,
    height: 30,
  },
  labelText: {
    fontSize: 14,
    fontWeight: '800',
    marginLeft: 5,
    marginTop: 5,
    color: '#AFEEEE',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 30,
    backgroundColor: '#0E2F44',
    width: 120,
    height: 40,
    marginTop: 40,
  },
  refreshButton: {
    marginLeft: 5,
  },
  submitText: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    elevation: 5,
    color: '#F5F5DC',
  },
  refreshText: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    elevation: 5,
    color: '#F5F5DC',
  },
});
