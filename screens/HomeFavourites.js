import { View, Text, SafeAreaView, Image, ScrollView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Bars3Icon } from "react-native-heroicons/solid";

import AppContext from '../AppContext';
import { client } from '../services/api/AutoShopsApi';
import GlobalStyles from '../GlobalStyles';
import HomeFaveCard from '../components/HomeFaveCard';

const HomeFavourites = ({navigation}) => {
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
          setFavourites(response.data)
        })
        .catch(e => console.log(e))
    };

    setLoading(true);
    getFavourites(); 
    setLoading(false);
  }, [loginData])

  return isLoading ? <ActivityIndicator size="large" color="0000ff" /> : (
    <ScrollView className="bg-green-50 py-2">
      {favourites?.map(favourite => (
        <HomeFaveCard 
          key={favourite.id.toString()}
          id={favourite.autouser.id}
          personal_info={favourite.autouser}
          region={favourite.region}
          rating={favourite.rating}
          profile_pic={favourite.autouser.photo}
          shop_pic={favourite.profile_picture}
          description={favourite.shop_description}
          shop_motto={favourite.shop_goal}
          skill_badge={favourite.skill_badge}
          reviews={favourite.technician_feedback}  
          specializations={favourite.technician_specialization} 
        />
      ))}
    </ScrollView>
  )
}

export default HomeFavourites