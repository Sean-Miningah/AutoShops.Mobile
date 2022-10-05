import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native"
import { Bars3Icon } from "react-native-heroicons/solid"

import GlobalStyles from '../GlobalStyles'

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    })
  }, [])
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="bg-white pt-5">

      {/* Header */}
      <View style= {styles.container} className="flex-row mx-4 items-center">
        <View className="flex-1">
          <Bars3Icon size={40} color="black" /> 
        </View>
        
             
        <View className="flex-1">
          <Text className="text-base text-teal-100"> Welcome </Text>
          <Text className="text-xl font-bold"> Ronald </Text>
        </View>

        <View className="">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1664960599656-7f634fcc772f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          }}  

          className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        </View>

        
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})