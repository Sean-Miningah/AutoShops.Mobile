// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Button, TextInput, View, Image } from 'react-native';
// import {Formik } from "formik";
// import * as Yup from "yup";

// import { register } from "../slices/auth";
// import { clearMessage } from "../slices/message";

// const Register = () => {
//   const [successful, setSuccessful] = useState(false);

//   const { message } = useSelector((state) => state.message);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(clearMessage());
//   }, [dispatch]);

//   const initialValues = {
//     username: "",
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     username: Yup.string()
//       .test(
//         "len",
//         "The username must be between 3 and 20 characters.",
//         (val) =>
//           val &&
//           val.toString().length >= 3 &&
//           val.toString().length <= 20
//       )
//       .required("This field is required!"),
//     email: Yup.string()
//       .email("This is not a valid email.")
//       .required("This field is required!"),
//     password: Yup.string()
//       .test(
//         "len",
//         "The password must be between 6 and 40 characters.",
//         (val) =>
//           val &&
//           val.toString().length >= 6 &&
//           val.toString().length <= 40
//       )
//       .required("This field is required!"),
//   });

//   const handleRegister = (formValue) => {
//     const { username, email, password } = formValue;

//     setSuccessful(false);

//     dispatch(register({ username, email, password }))
//       .unwrap()
//       .then(() => {
//         setSuccessful(true);
//       })
//       .catch(() => {
//         setSuccessful(false);
//       });
//   };

//   return (
//     <View className="col-md-12 signup-form">
//       <View className="card card-container">
//         <Image
//           source={{uri:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}
//           className="profile-img-card"
//         />
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleRegister}
//         >
//           {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
//             <>
//               <TextInput 
//                 name="username"
//                 placeholder="Write your name here."
//                 styles={styles.textInput}
//                 onChangeText={handleChange('email')}
//                 onBlur={handleBlur('username')}
//                 value={values.username}
//                 keyboardType="username"
//               />
//               {errors.username &&
//                 <Text style={{ fontSize: 10, color: 'red' }}>{errors.username}</Text>
//               }

//               <TextInput 
//                 name="email"
//                 placeholder="Write your email here."
//                 styles={styles.textInput}
//                 onChangeText={handleChange('email')}
//                 onBlur={handleBlur('email')}
//                 value={values.email}
//                 keyboardType="email"
//               />
//               {errors.email &&
//                 <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
//               }

//               <TextInput
//                 name="password"
//                 placeholder="Password"
//                 style={styles.textInput}
//                 onChangeText={handleChange('password')}
//                 onBlur={handleBlur('password')}
//                 value={values.password}
//                 secureTextEntry
//               />
//               {errors.password &&
//                 <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
//               }  

//               <Button
//                 onPress={handleSubmit}
//                 title="LOGIN"
//                 disabled={!isValid}
//               /> 
//             </>
//           )}
//         </Formik>
//       </View>

//       {message && (
//         <View className="form-group">
//           <View
//             className={successful ? "alert alert-success" : "alert alert-danger"}
//             role="alert"
//           >
//             {message}
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };

// export default Register;
