import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native'


const HomeFaveCard = ({
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
}) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Home', {
          screen: 'TechnicianProfile',
          params: {
            id, 
            personal_info,
            region,
            rating, 
            shop_pic,
            profile_pic,
            description,
            shop_motto,
            skill_badge,
            reviews,
            specializations,
          },
        });
      }}
    >
      <View className="px-2 w-max">
        <View className="px-3 border-b border-b-green-400 w-max">
          <View className="py-2 px-4 w-max">
            <View className="flex-row justify-between">
              <View className="w-28">
                <Image 
                  className="h-32 w-24 rounded-lg"
                  source={{
                    uri: profile_pic
                  }}          
                />
                <Text className="mt-2 text-xl">{personal_info.first_name} {personal_info.last_name}</Text>
              </View>
              <View className="w-44">
                <View>
                  {/* Badge */}
                </View>
                <View>
                  <Text className="text-lg tracking-widest">Rating of {rating} / 5</Text>
                </View>
                <View className="flex-row justify-start">
                  <View>
                    <MapPinIcon size={20} color="green"/>
                  </View>
                  <View>
                    <Text className="text-lg ml-1">{region}</Text>
                  </View> 
                </View>
                <View>
                  <Text className="font-light">Specialize(s) in:</Text>
                  {specializations[0].specialization?.map(specialization => (
                    <Text
                      key={specialization.id}
                      className="font-bold"
                    >{specialization.name}</Text>
                  ))}
                </View>
                
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default HomeFaveCard