import { View, Text, Image } from 'react-native'
import React from 'react'
import { ClipboardDocumentCheckIcon } from 'react-native-heroicons/solid'

const BookingCard = ({
  date,
  time, 
  garage_pic,
  rating, 
  autouser_description,
  technician_description, 
  region,
  technician_id,
  status,
}) => {

  const bookingstateChecker = (data) => {
    if (data === true){
      return (
        <>
          <ClipboardDocumentCheckIcon color="green" height={70} width={40} />
          <Text className="text-sm">Confirmed.</Text>
        </>
      )
    } else {
      return (
        <>
          <ClipboardDocumentCheckIcon color="orange" height={70} width={40} />
          <Text className="text-xs">Pending Confirmation.</Text>
        </>  
      ) 
    }
  }
  return (
    <View className="py-2 w-max bg-amber-50">
      <View className="mx-3 border-b border-b-amber-400 w-max">
        <View className=" py-5 px-4 w-max bg-amber-50">
          <View className="absolute right-2 w-22" >
            <Text className="text-xl text-cyan-800" >{date}</Text>
            <Text className="text-l text-cyan-600">{time}</Text>
          </View>

          <View className="flex-row justify-between">
            <View>
              <Text className="text-sm w-56 h-20">{autouser_description.slice(0, 100)}.....</Text>
            </View>
            <View className="mt-4 w-20">
              {bookingstateChecker(status)}
            </View>
          </View>
          <View className="">
            <View>
              <Text>Location - {region}</Text>
            </View>
            <View>  
              <Text>Rating - {rating} / 5</Text>
            </View>
          </View>
        </View>
      </View>
      
    </View>
    
  )
}

export default BookingCard