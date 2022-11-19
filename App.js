import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppContext from './AppContext'
import BottomTabNavigator from './navigation/TabNavigator';



export default function App() { 
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({})
  const [technicianListings, setTechnicianListings] = useState([]);
  const [favouriteTechnicians, setFavouriteTechnicians] = useState([]);
  const [bookTechnicians, setBookTechnician] = useState([]);



  const userSettings = {
    isLoggedIn,
    isRegistered,
    technicianListings,
    loginData,
    favouriteTechnicians,
    bookTechnicians,
    setTechnicianListings,
    setLoginData,
    setIsRegistered,
    setIsLoggedIn,
    setFavouriteTechnicians,
    setBookTechnician
  }
  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

