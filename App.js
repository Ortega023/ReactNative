import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons'; 
import Home from './src/components/Home';
import Buscar from './src/components/Buscar';
import Notificaciones from './src/components/Notificaciones';
import Perfil from './src/components/Perfil';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Inicio') {
              iconName = 'home'; 
            } else if (route.name === 'Buscar') {
              iconName = 'magnify'; 
            } else if (route.name === 'Notificaciones') {
              iconName = 'bell'; 
            } else if (route.name === 'Perfil') {
              iconName = 'account'; 
            }

            
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Buscar" component={Buscar} />
        <Tab.Screen name="Notificaciones" component={Notificaciones} />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
