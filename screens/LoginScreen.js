import React, { useState, useContext } from "react";
import { Button, TextInput, View} from 'react-native';
import { Formik} from "formik";
import * as Yup from "yup";

import AppContext from "../AppContext";
import { login } from "../services/auth.service"


const Login = ({ navigation }) => {
  const myContext = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    setLoading(true);
    if (login(email, password)){
      myContext.setIsLoggedIn(true)
      navigation.navigate('HomeScreen')
    } else {
      myContext.setIsLoggedIn(false)
    }
    console.log(myContext.LoggedIn)
    setLoading(false);
  };

  if (myContext.LoggednIn === true ){
    () => navigation.navigate('HomeScreen')
  }

  return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => handleLogin(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <TextInput 
                  name="Email" 
                  placeholder="What is your email address" 
                  onChangeText={handleChange('email')} 
                  onBlur={handleBlur('email')} 
                  value={values.email}
                />
    
                <TextInput
                  name="password"
                  placeholder="Password"
                  // Check on the styles situation
                  // style={styles.textInput}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                
                <Button
                  onPress={handleSubmit}
                  title="Submit"
                />
              </View>
            )}
        </Formik>
  )
};


export default Login;
