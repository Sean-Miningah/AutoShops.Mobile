import { View, Text, Image, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { BookmarkIcon } from 'react-native-heroicons/solid'

import TechnicianSpecialization from '../components/TechnicianSpecialization'


const TechnicianProfile = ({ route, navigation }) => {
  const { 
    id,
    personal_info,
    region,
    rating,
    profile_pic,
    shop_pic,
    description,
    shop_motto,
    skill_badge,
    reviews,
    specializations
  } = route.params

  
  console.log('These are specializations in technicianCard', specializations[0])
  return (
    <ScrollView>
      <View className='relative'>
        <Image 
          source={{
            uri: shop_pic
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
      </View>

      <View className="p-2">
        <View className="flex-row justify-between">
          <Text className="text-2xl px-2">{personal_info.first_name + ' ' + personal_info.last_name}</Text>
          <BookmarkIcon size={36} color="grey" />
        </View>

        {/* Horizontal Line */}
        <View className=" m-2 border-t-4 border-slate-300 border-2"></View>

        {/* Technician Profile Body */}
        <View className="mx-4 my-2">

          {/* Shop Motto and Description */}  
          <View className="mb-4">
            <Text className=" mb-2 text-justify ">{shop_motto}</Text>
            <View className="">
              <Text className="text-xl font-semibold">Shop Description</Text>
              <Text className="mb-2 text-justify">{description}</Text>
            </View>
            
          </View> 

          {/* Specializatons List */}
          <View>
            {specializations[0].specialization?.map(specialization => (
              <TechnicianSpecialization
                key={specialization.id}
                name={specialization.name}
              />
            ))}
          </View>

          {/* Technician Skill Badge */}
          <View>
            <Text>{skill_badge.badge} badge</Text>
          </View>
        </View>

        <View className=" flex-row w-full justify-around pt-10">
          <Pressable 
            className="bg-orange-300 h-12 w-28 p-2 justify-center rounded-lg"
          >
            <Text className="text-center text-orange-800">Request Quotation</Text>
          </Pressable>
          <Pressable
            className="bg-orange-300 h-12 w-28 p-2 justify-center rounded-lg"
          >
            <Text className="text-center text-orange-800">Book Session</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

export default TechnicianProfile