import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SettingScreen = ({ navigation }) => {
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();

  // const onLogout = () => {
  //   dispatch(logut()).then((response) => {
  //     if (response.status === "success") {
  //       navigation.replace("LoginScreen");
  //     }
  //   })
  // }

  return (
    <View style={Styles.container}>
      <Text style={{ fontSize: 16 }}>Welcome </Text>
      <Button onPress={() => onLogout()} title="Logout" />
    </View>
  )
}

export default SettingScreen

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});