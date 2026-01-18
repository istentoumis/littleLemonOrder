import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#495E57',
        tabBarInactiveTintColor: '#ccc',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={'HomeScreen'}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home'}
                size={size}
                color={color}
              />
            );
          },
          tabBarLabel: 'Home',
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name={'Profile'}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Ionicons
                name={focused ? 'accessibility-sharp' : 'accessibility-sharp'}
                size={size}
                color={color}
              />
            );
          },
          tabBarLabel: 'Profile',
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
