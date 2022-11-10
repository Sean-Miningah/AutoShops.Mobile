import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authHeader from "../auth-header";


const API_URL = "http://192.168.100.4:8000/api/";

const storeData = async (key, value) => {
  try{
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.error(e)
  }  
}
const client = axios.create({
  baseURL: API_URL,
  headers: authHeader,
})


// Application Get Requests
// #######################

const getAccount = (user_id) => {
  client 
    .get(`auto-users/account/${user_id}/`)
    .then(() => {
      storeData('userAccount', response.data)
    })
}

const getTechnicianListing = () => {
  client
    .get('technicians/listing/')
    .then((response) => {
      storeData('technicianListings', response.data)
    })   
}

// Favourite Technicians
const getfavouriteTechnicians = () => {
  client 
    .get('favourites/')
    .then((response) => {
      storeData('favouriteTechnicians', response.data)
    })
}

// ################################

// Application Post Requests
