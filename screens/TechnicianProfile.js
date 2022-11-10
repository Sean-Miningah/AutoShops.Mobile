import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { BookmarkIcon } from 'react-native-heroicons/solid'


const TechnicianProfile = () => {
  return (
    <ScrollView>
      <View className='relative'>
        <Image 
          source={{
            uri:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/garage-storage-ideas-utilize-the-underside-of-surfaces-for-storage-1646672283.jpg?crop=1.00xw:0.752xh;0,0.171xh&resize=768:*"
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
      </View>

      <View className="p-2">
        <View className="flex-row justify-between">
          <Text className="text-2xl px-2"> John's General Shop </Text>
          <BookmarkIcon size={36} color="grey" />
        </View>

        {/* Horizontal Line */}
        <View className=" m-2 border-t-4 border-slate-300 border-2"></View>

        {/* Technician Profile Body */}
        <View>

        </View>
      </View>
    </ScrollView>
  )
}

export default TechnicianProfile