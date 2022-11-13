import { View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { MapPinIcon, TrophyIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'


const TechnicianCard = ({
  id,
  personal_info,
  region,
  rating,
  profile_pic,
  description,
  shop_motto,
  skill_badge,
  reviews,
  specializations
}) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity
        className="bg-amber-100 p-3 mb-2 rounded-lg"
        onPress={() => {
          navigation.navigate('TechnicianProfile', {
            id,
            personal_info,
            region,
            rating,
            profiel_pic,
            description,
            shop_motto,
            skill_badge,
            reviews,
            specializations,
          });
        }}
    >   
      {/* Technician Performance Rank */}
      <View className="flex-row-reverse mb-5" >
        <TrophyIcon size={20} color="black"/>
        <TrophyIcon size={20} color="black"/>
      </View>

      {/* Technician Personal Information */}
      <View>
        {/* Technician Name */}
        <Text className="text-lg tracking-tight pb-2">{personal_info.first_name + ' ' + personal_info.last_name}</Text>
        <View>
          {/* Location Information */}
          <View className="flex-row">
            <MapPinIcon size={16} color="black"/>
            <Text>{region}</Text>
          </View>

          {/* Rating Information */}
          <View className="flex-row">
            <Text className="italic font-bold">Rating </Text>
            <Text> {rating}/5</Text>
          </View>

          <Image
          source={{
            uri: profile_pic,
          }}  

          className=" h-10 w-10 bg-gray-300 p-4 rounded-full absolute bottom-0 right-0"
        />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default TechnicianCard