import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';

import AppContext from "../AppContext";
import { client } from '../services/api/AutoShopsApi';

const OptionButton = ({
  id,
  title,
}) => {
  const { loginData, setTechnicianListings } = useContext(AppContext);
  const handleFilter = (value) => {
    client.defaults.headers.common["Authorization"] = 'Bearer ' + loginData.access_token
    client 
      .get('auto-users/technician-listing/',
        {
          params : {
            specialization: value,
          }
        }
      )
      .then((response) => {
        setTechnicianListings(response.data)
      })
      .catch(e => console.log(e))
  }
  return (
    <TouchableOpacity
      className=""
      onPress={() => handleFilter(id)}
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