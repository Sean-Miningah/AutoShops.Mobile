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
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
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