import { View, Text, Button, TextInput, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import DatePicker from 'react-native-modern-datepicker';

import GlobalStyles from '../GlobalStyles'

const BookingScreen = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [open, setOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const { control, handleSubmit, setValue, clearErrors, formState: { errors } } = useForm({
    defaultValues: {
      description: '',
      date: '',
      time: ''
    }
  });

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
            setValue('date', date);
            clearErrors('date')
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
          onTimeChange={time => {
            setTime(time);
            setValue('time', time);
            clearErrors('time');
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
  // const onSubmit = data => console.log(data);
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <ScrollView style={GlobalStyles.droidSafeArea}>
      <View
        className="my-10 mx-4"
      > 
        <View className="m-3 borderborder-green-500">
          <Text className="text-xl text-center bg-green-100 p-2 rounded-md">Complete the form below to initiate a technician booking</Text>
        </View>
        
        <View className="border p-2 rounded-lg">
          <View className="mb-10">
            <Text className="text-lg m-2">Write your quotation description below</Text>
            <Controller 
              control={control}
              rules = {{
                required: true,
              }}
              render ={({ field: { onChange, onBlur, value } }) => (
                <TextInput 
                  className="text-l h-32 bg-green-100 px-4 py-2"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Describe details you mant the technician to see about your booking!"
                  textAlignVertical="top"
                  multiline={true}
                  number={8}
                />
              )}
              name="description"
            />
            {errors.description && <Text>This is required.</Text>}
          </View>
          <View className="flex-row justify-around">
            <View>
              <Text>Date : </Text>
              <Controller
                name='date'
                control={control}
                rules = {{
                  required: true,
                }}
                render={({field: {onChange,}})=> (
                  <TextInput
                    className="px-4 py-2 w-24"
                    editable={false}
                    value={date}
                    onChange={onChange}
                  />
                )}
              />
              {errors.date && <Text>This is required.</Text>}
            </View>

            <View>
            <Text>Time : </Text>
              <Controller
                name='time'
                control={control}
                setValue={time}
                rules = {{
                  required: true,
                }}
                render={({field: {onChange,}})=> (
                  <TextInput
                    className="px-4 py-2 w-20"
                    editable={false}
                    value={time}
                    onChange={onChange}
                  />
                )}
              />
              {errors.time && <Text>This is required.</Text>}
            </View>
          </View>
          
          
          
          <View 
          className="flex-row justify-around"
          >
            <Pressable
              className="m-3 p-3 bg-orange-200 w-24 rounded-md"
              onPress={() => {
                setOpen(true);
              }}
            >
              <Text>Pick a Date</Text>
            </Pressable>

            <Pressable
              className="m-3 p-3 bg-orange-200 w-24 rounded-md"
              onPress={() => {
                setTimeOpen(true);
              }}
            >
              <Text>Pick a Time</Text>
            </Pressable>
          </View>

          {dateshow()}
          {timeshow()}
          <View className="flex-row justify-center border-t border-t-indigo-900 pt-2">
            <Pressable
              className="bg-red-900 py-2 px-4 rounded-md"
              onPress={handleSubmit(onSubmit)}
            >
              <Text className="text-lg text-white">Submit</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default BookingScreen