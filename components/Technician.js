import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { MapPinIcon, TrophyIcon } from 'react-native-heroicons/solid'

const Technician = () => {
  return (
    <TouchableOpacity
        className="bg-amber-100 p-3 mb-2 rounded-lg"
    >   
      {/* Technician Performance Rank */}
      <View className="flex-row-reverse mb-5" >
        <TrophyIcon size={20} color="black"/>
        <TrophyIcon size={20} color="black"/>
      </View>

      {/* Technician Personal Information */}
      <View>
        {/* Technician Name */}
        <Text className="text-lg tracking-tight pb-2"> John's General Shop </Text>
        <View>
          {/* Location Information */}
          <View className="flex-row">
            <MapPinIcon size={16} color="black"/>
            <Text> James Gichuru Road</Text>
          </View>

          {/* Rating Information */}
          <View className="flex-row">
            <Text className="italic font-bold">Rating </Text>
            <Text> 4.3/5</Text>
          </View>

          <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1664960599656-7f634fcc772f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          }}  

          className=" h-10 w-10 bg-gray-300 p-4 rounded-full absolute bottom-0 right-0"
        />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Technician