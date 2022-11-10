import AsyncStorage from "@react-native-async-storage/async-storage"

export default function authHeader() {
    const user = JSON.parse(AsyncStorage.getItem('loginData'));

    print(user)
    
    if (user.access_token && user.refresh_token) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }
  