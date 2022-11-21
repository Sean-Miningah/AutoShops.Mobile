import React, { useEffect, useContext, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

import AppContext from '../AppContext';
import BookingCard from '../components/BookingCard';
import { client } from '../services/api/AutoShopsApi';


const HomeBookings = () => {
  const { 
    bookTechnicians, 
    setBookTechnician, 
    loginData,

  } = useContext(AppContext);
  const [ isLoading, setLoading] = useState(false);

  useEffect(() => {
    client.defaults.headers.common["Authorization"] = 'Bearer ' + loginData.access_token;
    const getBookings = () => {
      client
        .get('auto-users/bookings/')
        .then((response) => {
          setBookTechnician(response.data);
          console.log('the response data', response.data);
        })
        .catch(e => console.log(e))   
    };

    setLoading(true);
    getBookings();
    setLoading(false)
  }, [loginData])

  useEffect(() => {
    console.log('bookings.....', bookTechnicians)
  }, [bookTechnicians])

  return isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : (
    <ScrollView className=" bg-amber-50">
      {bookTechnicians?.map(technician => (
        <BookingCard
          key={technician.id}
          date={technician.date}
          time={technician.time}
          garage_pic={technician.technician.profile_pic}
          rating={technician.technician.rating}
          autouser_description={technician.autouser_description}
          technician_description={technician.technician_description}
          region={technician.technician.region}
          technician_id={technician.technician.id}
          status={technician.status}
        />
      ))}
    </ScrollView>
  )
}

export default HomeBookings