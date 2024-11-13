import { StyleSheet, Text, View, Button, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

const Home = ({ navigation }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeatherData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const json = await response.json();

      if (!response.ok) {
        throw new Error('Failed to fetch Data');
      }

      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ padding: 20, backgroundColor:"white", borderBottomLeftRadius:35,
      borderBottomRightRadius:35, elevation:10}}>
      {loading && <ActivityIndicator size="large" color="#CFECF7" />}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      {<View><Text style={{
        color:"black",
        fontWeight:"600",
        fontSize:20,
        textAlign:"center",
        padding:10,
      }}>Cats Fun Facts</Text></View>}
      {data && (
        
        <View style={{width:"90%", height:180, backgroundColor:"#87CEEB", marginLeft:20, borderRadius:30,
          elevation:10}}>
            <ScrollView>
          <Text style={
            {
              color:"black",
              fontWeight:"600",
              fontSize:17,
              textAlign:"center",
              marginTop:30,
              
            }
          }>{data.fact}</Text>
          <Text style={
            {
              color:"black",
              fontWeight:"600",
              fontSize:17,
              textAlign:"center",
              marginTop:20,
              
            }
          }>Count of Character: {data.length}</Text>
          </ScrollView>
        </View>
      )}
      <TouchableOpacity style={{borderRadius:30, backgroundColor:"#CFECF7", width:"50%", height:30, marginTop:10, marginLeft:90}} onPress={() => getWeatherData()} ><Text style={{textAlign:"center", marginTop:5, fontWeight:"bold", elevation:5, color:"red"}}>New Fact</Text></TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
