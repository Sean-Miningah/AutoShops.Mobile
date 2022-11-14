import { View, Text } from 'react-native'
import React from 'react'

const TechnicianSpecialization = ({
    name,
}) => {
  return (
    <View className="pl-4">
      <Text className="font-semibold capitalize text-xl"> - {name}</Text>
    </View>
  )
}

export default TechnicianSpecialization