import React, { useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import { UserContext } from '../context/UserContext';
import { useNavigation, StackActions } from '@react-navigation/native';

type Props = {
  isProfile?: boolean;
};
const UserForm = ({ isProfile = false }: Props) => {
  const navigation = useNavigation();
  const context = useContext(UserContext);
  if (!context)
    throw new Error('UserContext must be used within a UserProvider');

  const { user, setUser } = context;

  const isFormValid =
    user.firstName.trim() !== '' &&
    user.lastName.trim() !== '' &&
    user.email.trim() !== '' &&
    user.password.trim() !== '';

  const handleSubmit = () => {
    if (!isFormValid) return;
    navigation.dispatch(StackActions.replace('BottomTabs'));
  };

  const onLogout = () => {
    navigation.dispatch(StackActions.replace('Login'));
  };

  return (
    <View style={styles.container}>
      <View style={isProfile ? { marginTop: 48 } : null}>
        {!isProfile && <Text style={styles.title}>Let us get to know you</Text>}
        {isProfile && <Text style={styles.label}>First Name</Text>}
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={user.firstName}
          onChangeText={text => setUser({ ...user, firstName: text })}
          editable={!isProfile}
        />
        {isProfile && <Text style={styles.label}>Last Name</Text>}
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={user.lastName}
          onChangeText={text => setUser({ ...user, lastName: text })}
          editable={!isProfile}
        />
        {isProfile && <Text style={styles.label}>Email</Text>}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={user.email}
          onChangeText={text => setUser({ ...user, email: text })}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!isProfile}
        />
        {!isProfile && (
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={user.password}
            onChangeText={text => setUser({ ...user, password: text })}
            secureTextEntry={true}
            autoCapitalize="none"
          />
        )}
      </View>
      <Pressable
        onPress={isProfile ? onLogout : handleSubmit}
        disabled={isProfile ? false : !isFormValid}
        style={({ pressed }) => [
          styles.button,
          !isFormValid && styles.buttonDisabled,
          pressed && isFormValid && styles.buttonPressed,
        ]}
      >
        {isProfile ? (
          <Text style={styles.buttonText}>Logout</Text>
        ) : (
          <Text style={styles.buttonText}>Submit</Text>
        )}
      </Pressable>
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 24,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
  label: {
    marginBottom: 4,
    marginLeft: 4,
    fontSize: 14,
    color: '#495E57',
    fontWeight: '500',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    height: 48,
    backgroundColor: '#495E57',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
