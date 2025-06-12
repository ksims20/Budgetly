/*
Main purposes of app.js will be to serve as a routes. Checks if the user is logged in or not, if they are,
takes them to the dashboard js, if they aren't takes them to the registration / login js
No styling or return statement needed
*/

import Login from "./Login.js";
import Register from "./Register.js";
import Dashboard from "./Dashboard.js";


import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect, } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import 'setimmediate';
if (typeof global.setImmediate === 'undefined') {
  global.setImmediate = (fn, ...args) => {
    return setTimeout(() => fn(...args), 0);
  };
}

const Stack = createNativeStackNavigator();

function Nav(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://192.168.1.156:8080/api/expense")  // If router changes , get the new ip [ipconfig | findstr /i "IPv4" in powershell]
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching API:", error));
  }, []); 


   return <Nav/>;
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });


