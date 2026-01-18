import React from 'react';
import { View, StyleSheet } from 'react-native';

import LoginHeader from '../components/Header';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LoginHeader />
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
});

export default LoginScreen;
