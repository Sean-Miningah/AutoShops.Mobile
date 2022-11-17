import { View, Text, SafeAreaView, Image, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Bars3Icon } from "react-native-heroicons/solid";

import AppContext from '../AppContext';
import { client } from '../services/api/AutoShopsApi';
import GlobalStyles from '../GlobalStyles';
import FavouritesCard from '../components/FavouritesCard';

const FavouriteScreen = () => {
  const { isLoggedIn, loginData } = useContext(AppContext);
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(()=> {
    if (isLoggedIn !== true){
      navigation.navigate('LoginScreen');
    }
  });

  useEffect(() => {
    client.defaults.headers.common["Authorization"] = 'Bearer ' + loginData.access_token
    const getFavourites = () => {
      client
        .get('auto-users/favourites/')
        .then((response) => {
          console.log('Favouirites  ',response.data)
          setFavourites(response.data)
        })
        .catch(e => console.log(e))
    };

    setLoading(true);
    getFavourites();
    setLoading(false);
  }, [])

  return isLoading ? <ActivityIndicator size="large" color="0000ff" /> : (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row mx-4 items-center">
        <View className="flex-1">
          <Bars3Icon size={40} color="black" /> 
        </View>
        
            
        <View className="flex-1">
          <Text className="text-base text-teal-400"> {loginData.data.first_name} {loginData.data.last_name}</Text>
          <Text className="text-xl font-bold">Favourites</Text>
        </View>

        <View className="">
        <Image
          source={{
            uri: loginData.data.photo
          }}
          className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        </View>
      </View>   

      {/* Horizontal Line */}
      <View className=" m-2 border-t-4 border-slate-300 border-2"></View>

      {/* Mechanics list feed */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="p-2"
      >
        {favourites?.map(technician => (
          <FavouritesCard 
            key={technician.id.toString()}
            id={technician.id}
            personal_info={technician.autouser}
            region={technician.region}
            rating={technician.rating}
            profile_pic={technician.autouser.photo}
            shop_pic={technician.profile_picture}
            description={technician.shop_description}
            shop_motto={technician.shop_goal}
            skill_badge={technician.skill_badge}
            reviews={technician.technician_feedback}  
            specializations={technician.technician_specialization} 
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default FavouriteScreen