import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import FavouriteScreen from './screens/FavouriteScreen'
import SettingScreen from './screens/SettingScreen'

// const Stack = createNativeStackNavigator()
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Favourite" component={FavouriteScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  )
}


const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Main-Settings" component={MainStackNavigator} />
    </BottomTab.Navigator>
  );
};

export default function App() { 
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

