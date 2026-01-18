import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LoginForm from '../components/LoginForm';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Information</Text>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.avatar}
        />
      </View>
      <LoginForm isProfile />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 20,
    color: '#495E57',
  },
  avatarContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#495E57',
  },
});
