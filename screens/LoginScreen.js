import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { Button, TextInput, View, Text} from 'react-native';
import { useForm, Controller } from "react-hook-form"
import axios from "axios"

import AppContext from "../AppContext";
import { setLoginData } from "../services/auth.service"
import GlobalStyles from '../GlobalStyles'

const API_URL = "http://192.168.100.4:8000/api/auto-users/";

const Login = ({ navigation }) => {
  const {setIsLoggedIn, isLoggedIn} = useContext(AppContext);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    })
  }, [])

  const { control, handleSubmit, formState: { errors} } = useForm({
    defautlValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (values) => {
    return axios({
      method: 'post',
      url: API_URL + "login/",
      data: {
        email: values.email,
        password: values.password
      }
    })
    .then((response) => {
      if (response.status === 201){
        console.log(response.data);
        setLoginData(response.data);
        setIsLoggedIn(true);
      }
    })
    .catch(error => console.error(error.response.status))
  }; 

  useEffect(() => {
    console.log(isLoggedIn)
    if (isLoggedIn === true){
      navigation.navigate('HomeScreen')
    }
  }, [isLoggedIn])

  return (
    <View
      style={GlobalStyles.droidSafeArea}
      >
      <View className="pt-12 mx-4">
        <Text className="text-2xl text-orange-700">Login to view Workshops</Text>
      </View>
      <View className="bg-white pt-10 pb-20 px-12 h-max">
        <View className="mb-4">
          <Text className="text-1xl italic pb-2">enter your email below : </Text> 
          <View>
            <View 
              className="border-green-800 border-b  rounded-md py-2 mb-2"
              >
              <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    className="pl-4 text-xl"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="email"
              />
            </View>
            {errors.email && <Text className="text-sm tracking-tight text-amber-600">This is required.</Text>}
          </View> 
        </View>

        <View className="mb-4">
          <Text className="text-1xl italic pb-2">Enter password</Text> 
          <View>
            <View 
              className="border-green-800 border-b  rounded-md py-2 mb-2"
              >
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    className="pl-4 text-xl"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry
                  />
                )}
                name="password"
              />
            </View>
            {errors.password && <Text className="text-sm tracking-tight text-amber-600">This is required.</Text>}
          </View> 
        </View>

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>  
  )
};


export default Login;
