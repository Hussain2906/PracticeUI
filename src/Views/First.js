import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const First = () => {
  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
    <View style={{flexDirection:"row", justifyContent:"center", height:"100%"}}>
      <Text style={{textAlign:"center"}}>First</Text>
    </View>
    </SafeAreaView>
  )
}

export default First

const styles = StyleSheet.create({})