import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import StartScreen from "../screens/StartScreen"
import Register from "../screens/RegistrationScreen";
import Login from "../screens/LoginScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import SettingScreen from "../screens/SettingScreen";
import ChatScreen from "../screens/ChatScreen";
import TechnicianProfile from "../screens/TechnicianProfile"
import BookingScreen from "../screens/BookingScreen";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="StartScreen" screenOptions={{headerShown: false}}>
      <Stack.Screen name="StartScreen" 
        component={StartScreen}
        option={{headerShown: false}} />
      <Stack.Screen name="Registration" 
        component={Register}
        option={{headerShown: false}} />
      <Stack.Screen name="LoginScreen"
        component={Login}
        option={{ headerShown: false}} />
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} />
      <Stack.Screen
        name="TechnicianProfile"
        component={TechnicianProfile}
        options={{ headerShown:false}}
      />
      <Stack.Screen
        name="BookingScreen"
        component={BookingScreen}
        options={{ headerShown: false}} 
      />
    </Stack.Navigator>
  )
}

const FavouriteStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Favourite" 
        component={FavouriteScreen} 
        options={{ headerShown: false}}
        />
    </Stack.Navigator>
  )
}

const SettingStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingScreen" component={SettingScreen}/>
    </Stack.Navigator>
  )
}

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat" component={ChatScreen}/>
    </Stack.Navigator>
  )
}

export { HomeStackNavigator, FavouriteStackNavigator, SettingStackNavigator, ChatStackNavigator }