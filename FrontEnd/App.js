/*
Main purposes of app.js will be to serve as a routes. Checks if the user is logged in or not, if they are,
takes them to the dashboard js, if they aren't takes them to the registration / login js
*/

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const { isloggedin, notloggedin } = useState(null);

  useEffect(() => {
    fetch("http://192.168.1.156:5000/prisma/expense")  // If router changes , get the new ip [ipconfig | findstr /i "IPv4" in powershell]
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching API:", error));
  }, []); 

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
