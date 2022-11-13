import { View, Text, Button } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'

const StartScreen = ({ navigation }) => {
  return (
    <View
      style={GlobalStyles.droidSafeArea}
    >
      <View>
        <Text>Welcome To Kenya Auto Shops</Text>
        <View>
          <Text>Would you like to ...</Text>
        </View>
      </View>

      <Button
        title="Register"
        onPress={() => 
          navigation.navigate('Registration')
        }
      />

      <Button
        title="Login"
        onPress={() => 
          navigation.navigate('LoginScreen')
        }
      />
      <Button
        title="House"
        onPress={() => 
          navigation.navigate('HomeScreen')
        }
      />
    </View>
  )
}

export default StartScreen