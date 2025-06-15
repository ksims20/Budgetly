import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
        <LinearGradient
         colors={['#e0f7fa', '#ffffff']} // light blue to white
         style={styles.container}
       >
           
        <Animatable.Text 
  animation="pulse" 
  duration={2100} 
  iterationCount="infinite"
  style={styles.logo}
>
  $$$
</Animatable.Text>



      {/* Login Screen Header */}
      <Text style={styles.header}>Welcome back! </Text>
      <Text>Please enter in your login details</Text>

     

      {/* Email Input */}
      <View style={styles.inputContainer}>
  <FontAwesome
    name="envelope"
    size={20}
    color="#999"
    style={styles.inputIcon}
  />
  <TextInput
    style={styles.input}
    placeholder="Enter your email"
    value={email}
    onChangeText={setEmail}
  />
</View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
  <FontAwesome
    name="lock"
    size={20}
    color="#999"
    style={styles.inputIcon}
  />
  <TextInput
    style={styles.input}
    placeholder="Enter your password"
    value={password}
    onChangeText={setPassword}
    secureTextEntry
    
  />
</View>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        title="Login"
        onPress={() => console.log('Login Pressed')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Footer with Register Link */}
      <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Register')}>
          Register here
        </Text>
        <Text style={styles.link} onPress={() => navigation.navigate('Testing')}>
          TestBackEndToFrontEnd
        </Text>
      </Text>
      </LinearGradient>

      
      
    // </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#9966CC',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 14,
  },
  link: {
    color: '#9966CC',
    fontWeight: 'bold',
  },
  logo: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#9966CC',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    height: 50,
    paddingHorizontal: 10,
  },
  // Icon styling
  inputIcon: {
    position: 'absolute',
    left: 15, // positions the icon inside the input on the left
  },
  // Input field styling
  input: {
    flex: 1,  // Makes sure the input takes the remaining space
    paddingLeft: 40, // Space to the left so the icon doesn't overlap with text
    fontSize: 16,
  }
});
