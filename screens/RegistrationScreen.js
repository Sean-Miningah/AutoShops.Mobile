import React, { useState, useEffect } from "react";
import { Text, Button, TextInput, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useForm, Controller } from "react-hook-form"
import * as Yup from "yup";

import GlobalStyles from '../GlobalStyles'
import { register } from "../services/auth.service";


const Register = ({ navigation }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  });
  const onSubmit = (data) => {
    console.log(data)
    if(register(values)) {
      () => navigation.navigate('LoginScreen')
    }
  }

  // handleRegister = (values) => {
  //   console.log(values)
  //   if (register(values)) {
  //     () => navigation.navigate('LoginScreen')
  //   }
  // }

  return (
    <View style={GlobalStyles.droidSafeArea } className="bg-orange-400 h-full">
      <View className="pt-12 mx-4">
        <Text className="text-2xl text-orange-700">Register first to get access to thousand of workshops</Text>
      </View>
      <View className="bg-white pt-10 pb-52 px-12 h-max">
        <View className="mb-4">
          <Text className="text-1xl italic pb-2">enter your first name below : </Text> 
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
                name="firstName"
              />
            </View>
            {errors.firstName && <Text className="text-sm tracking-tight text-amber-600">This is required.</Text>}
          </View> 
        </View>

        <View className="mb-4">
          <Text className="text-1xl italic pb-2">enter your lastName below : </Text> 
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
                name="lastName"
              />
            </View>
            {errors.lastName && <Text className="text-sm tracking-tight text-amber-600">This is required.</Text>}
          </View> 
        </View>

        <View className="mb-4">
          <Text className="text-1xl italic pb-2">enter your email address below : </Text> 
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
          <Text className="text-1xl italic pb-2">set your password</Text> 
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
  );
};

export default Register;
