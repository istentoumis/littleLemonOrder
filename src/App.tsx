import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import BottomTabs from './screens/BottomTabs';
import CartScreen from './screens/CartScreen';
import { UserProvider } from './context/UserContext';
import {CartProvider} from './context/CartContext'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name={'Login'} component={LoginScreen} />
              <Stack.Screen name={'BottomTabs'} component={BottomTabs} />
              <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </CartProvider>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
