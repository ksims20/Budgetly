import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';

const Register = ({ navigation }) => {
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LinearGradient colors={['#e0f7fa', '#ffffff']} style={styles.container}>
      <Animatable.Text
        animation="pulse"
        duration={2100}
        iterationCount="infinite"
        style={styles.logo}
      >
        $$$
      </Animatable.Text>

      {/* Register Screen Header */}
      <Text style={styles.header}>Register Here</Text>
      <Text>Please enter your details to create an account</Text>

      {/* Name Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="#999" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your Name"
          value={Name}
          onChangeText={setName}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#999" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#999" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Register Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Register Pressed')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* Footer with Login Link */}
      <Text style={styles.footerText}>
        Already a member?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Login here
        </Text>
      </Text>
    </LinearGradient>
  );
};

export default Register;

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
    flex: 1,  // Takes up remaining space in the container
    fontSize: 16,
    paddingLeft: 40, // Creates space for the icon inside the input
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
  inputIcon: {
    position: 'absolute',
    left: 15, // positions the icon inside the input on the left
  },
});
