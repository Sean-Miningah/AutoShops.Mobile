import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const OptionButton = ({
  id,
  title,
}) => {
  return (
    <TouchableOpacity
      className=""
    >
      <View
        className="bg-teal-300 mx-2 p-3 rounded-lg"
      >
        <Text className="text-base text-teal-900">{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default OptionButton