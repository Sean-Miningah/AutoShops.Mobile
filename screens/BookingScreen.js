import { View, Text, Button, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import DatePicker from 'react-native-modern-datepicker';

import GlobalStyles from '../GlobalStyles'

const BookingScreen = () => {
  const [date, setDate] = useState('')
  const [open, setOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const [time, setTime] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      description: ''
    }
  })

  const dateshow = () => {
    if (open){
      return (
        <DatePicker
          modal
          mode="calendar"
          current={date}
          minimumDate='2022-11-25'
          onSelectedChange={date => {
            setDate(date);
            setOpen(false);
            }
          }
        />
      )
    }
  }

  const timeshow = () => {
    if (timeOpen){
      return (
        <DatePicker
          mode="time"
          current={time}
          minuteInterval={30}
          onTimeChange={date => {
            setTime(date);
            setTimeOpen(false);
            }
          }
        />
      )
    }
  }

  useEffect(() => {
    console.log(date, time)
  },[date, time])
  const onSubmit = data => console.log(data);
  return (
    <View style={GlobalStyles.droidSafeArea}>
      <View className="bg-red pb-10 border-green-800 border-4">
        <Controller 
          control={control}
          rules = {{
            required: true,
          }}
          render ={({ field: { onChange, onBlur, value } }) => (
            <TextInput 
              className="h-4 m-2 text-xl"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="description"
        />
        {errors.description && <Text>This is required.</Text>}
      </View>
      
      <Button title="Date" onPress={() => setOpen(true)}/>

      {dateshow()}

      <Button title="Time" onPress={() => setTimeOpen(true)}/>

      {timeshow()}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

export default BookingScreen