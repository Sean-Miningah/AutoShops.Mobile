import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.100.4:8000/api/auto-users/";

const setLoginLocal = async (loginData) => {
  try {
    await AsyncStorage.setItem('loginData', JSON.stringify(loginData));
  } catch (err){
    console.log(err)
  }
}

// What are the register requirements?
const register = (values) => {
  return axios({
    method: 'post',
    url: API_URL + "register/", 
    data: {
      email: values.email,
      password: values.password,
      first_name: values.firstName,
      last_name: values.lastName, 
    }
  })
  .then((response) => {
    if (response.status === 201){
      console.log(response.data)
      return true
    } else {
      console.log(response.data)
      return false
    }
  })
  .catch(error => console.error(error))
};

const login = (email, password) => {

  return axios({
    method: 'post',
    url: API_URL + 'login/',
    data: {
      email: email,
      password: password
    }
  })
  .then((response) => {
    if (response.status === 401){
      return false
    } else if (response.status === 201){
      setLoginLocal(response.data)
      return true
    }
  })
  .catch(error => console.log(error))

};

const logout = () => {
  AsyncStorage.removeItem("loginData");
};

export { login, logout, register }