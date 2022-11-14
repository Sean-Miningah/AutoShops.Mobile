import React, { useState, useContext, useEffect } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, ActivityIndicator} from 'react-native';
import axios from "axios";
import { Bars3Icon } from "react-native-heroicons/solid";

import AppContext from "../AppContext";
import GlobalStyles from '../GlobalStyles';
import OptionButton from '../components/OptionButton';
import TechnicianCard from '../components/TechnicianCard';

const API_URL = "http://192.168.100.4:8000/api/"

const HomeScreen = ({ navigation }) => {
  // We need an api call to get technician Lisitngs and services
  const { isLoggedIn, loginData, technicianListings, setTechnicianListings } = useContext(AppContext);
  const [specializations, setSpecializations ] = useState([]);
  const [ isLoading, setLoading] = useState(false);
  

  useEffect(()=> {
    if (isLoggedIn !== true){
      navigation.navigate('LoginScreen');
    }
  });

  useEffect(() => {
    
    const client = axios.create({
      baseURL: API_URL,
    });
    client.defaults.headers.common["Authorization"] = 'Bearer ' + loginData.access_token
    const getTechnicianListing = () => {
      client
        .get('auto-users/technician-listing/')
        .then((response) => {
          setTechnicianListings(response.data)
        })
        .catch(e => console.log(e))   
    };

    const getSpecializations = () => {
      client
        .get('auto-users/technician-specializations/')
        .then((response) => {
          setSpecializations(response.data)
        })
        .catch(e => console.log(e))
    }
    setLoading(true);
    getTechnicianListing();
    getSpecializations();
    setLoading(false)
  }, [])

  useEffect(() => {
  //   console.log('This is the user data', loginData)
    console.log('These are the listings' , technicianListings)
    // console.log('These are the specializations' , specializations)
  });

  // console.log(getData('specializations'))
  return isLoading ? <ActivityIndicator size="large" color="#0000ff"/> : (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="bg-white pt-5">


        {/* Header */}
        <View style= {styles.container} className="flex-row mx-4 items-center">
        <View className="flex-1">
          <Bars3Icon size={40} color="black" /> 
        </View>
        
            
        <View className="flex-1">
          <Text className="text-base text-teal-400"> Welcome </Text>
          <Text className="text-xl font-bold">{loginData.data.first_name} {loginData.data.last_name}</Text>
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
      


      {/* Services Scroll Menu */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="pt-2 h-16"
      >
        {/* Services provided */}
        {specializations?.map(specialization => (
          <OptionButton 
            key={specialization.id.toString()}
            id={specialization.id}
            title={specialization.name}
          />
        ))}
      </ScrollView>

      {/* Horizontal Line */}
      <View className=" m-2 border-t-4 border-slate-300 border-2"></View>
      
      {/* Mechanics list feed */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="p-2"
      >
        {technicianListings?.map(technician => (
          <TechnicianCard 
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

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})