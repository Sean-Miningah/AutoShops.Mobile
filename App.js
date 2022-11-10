import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import AppContext from './AppContext'
import BottomTabNavigator from './navigation/TabNavigator';



export default function App() { 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userSettings = {
    LoggedIn: isLoggedIn,
    setIsLoggedIn
  }
  return (
    <AppContext.Provider value={userSettings}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppContext.Provider>
  );
}

