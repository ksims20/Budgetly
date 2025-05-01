import React from 'react';
import { View, Text, Button } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View>
      <Text>Dashboard Screen</Text>
      <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
          />
    </View>
  );
};

export default Dashboard;