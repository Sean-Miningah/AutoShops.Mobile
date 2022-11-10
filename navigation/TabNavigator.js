import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackNavigator, FavouriteStackNavigator, SettingStackNavigator, ChatStackNavigator } from "./StackNavigator";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Favourites" component={FavouriteStackNavigator} />
      <Tab.Screen name="Settings" component={SettingStackNavigator} />
      <Tab.Screen name="Chat" component={ChatStackNavigator} />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;