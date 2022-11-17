import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { BookmarkIcon, CheckBadgeIcon, SparklesIcon } from 'react-native-heroicons/solid';

import { client } from '../services/api/AutoShopsApi';
import AppContext from "../AppContext"
import TechnicianSpecialization from '../components/TechnicianSpecialization';


const TechnicianProfile = ({ route, navigation }) => {
  const { loginData } = useContext(AppContext);
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

  const handleBookSession = (value) => {
    console.log(value)
  }

  const handleRequestQuotation = (value) => {
    console.log(value)
  }

  const handleFavourite = (value) => {
    alert(personal_info.first_name + ' ' + personal_info.last_name + ' has been added to your favourites.')
    console.log(value)
    client.defaults.headers.common["Authorization"] = 'Bearer ' + loginData.access_token
    client
      .post(
        'auto-users/favourites/',
        data=JSON.stringify({
          technician: value,
        }),
        options={
          headers:{"content-type":"application/json"}
        }
      )
      .then((response) => {
        console.log(response.data)
      })
      .catch(e => console.log(e))
  }
  const skillbadge = (badge) => {
    if(badge === 'gold'){
      return (
        <View>
          <View className="flex-row">
          <SparklesIcon size="32" color="brown" className="pl-4"/>
            <SparklesIcon size="32" color="brown" className="pl-4"/>
            <SparklesIcon size="32" color="brown" className="pl-4"/>
          </View>
          <View className="pt-2 font-semibold">
            <Text> This technician has a {badge} badge. He is a specialist.</Text>
          </View>
          
        </View>
      )
    } else if(badge === 'silver'){
      return (
        <View>
          <View className="flex-row">
          <SparklesIcon size="32" color="brown" className="pl-4"/>
            <SparklesIcon size="32" color="brown" className="pl-4"/>
          </View>
          <View className="pt-2 font-semibold">
            <Text> This technician has a {badge} badge. He is well experienced.</Text> 
          </View>
        </View>
      )
    } else if (badge === 'bronze'){
      return (
        <View class="flex-row w-full">
          <View className="pl-4">
            <SparklesIcon size="32" color="brown" className="pl-4"/>
          </View>
          <View className="pt-2 font-semibold">
            <Text>This technician has a {badge} badge. He is a novice.</Text> 
          </View>
        </View> 
      )
    }
  }
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
          <Pressable
            onPress={() => {
              handleFavourite(id)
              alert('You Favorite')
            }}
          >
            <BookmarkIcon size={36} color="grey" />
          </Pressable> 
        </View>

        {/* Horizontal Line */}
        <View className=" m-2 border-t-4 border-slate-300 border-2"></View>

        {/* Technician Profile Body */}
        <View className="mx-4 my-2">

          {/* Shop Motto and Description */}  
          <View className="mb-4">
            <Text className=" mb-2 text-justify ">{shop_motto}</Text>
            <View className="">
              <Text className="text-xl font-semibold">Technician Description</Text>
              <Text className="mb-2 text-justify">{description}</Text>
            </View>
            
          </View> 

          {/* Specializatons List */}
          <View>
            <Text className="mb-2 font-bold">This Technician Specializes in the folloiwing areas</Text>
            {specializations[0].specialization?.map(specialization => (
              <TechnicianSpecialization
                key={specialization.id}
                name={specialization.name}
              />
            ))}
          </View>

          {/* Technician Skill Badge */}
          
          <View className="py-3">
            {
              skillbadge(skill_badge.badge)
            }
          </View>
          </View>

        <View className=" flex-row w-full justify-around pt-4">
          <Pressable 
            onPress={() => handleRequestQuotation(id)}
            className="bg-orange-300 h-12 w-28 p-2 justify-center rounded-lg"
          >
            <Text className="text-center text-orange-800">Start Chat</Text>
          </Pressable>
          <Pressable
            className="bg-orange-300 h-12 w-28 p-2 justify-center rounded-lg"
            onPress={() => handleBookSession(id)}
          >
            <Text className="text-center text-orange-800">Book Session</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  )
}

export default TechnicianProfile