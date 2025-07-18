import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import InicioScreen from '../app/(tabs)/inicio';
import CartillaScreen from '../app/(tabs)/cartilla';
import TramitesScreen from '../app/(tabs)/tramites';


import type { BottomTabParamList } from '../app/(tabs)/navigation';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

          switch (route.name) {
            case 'Inicio':
              iconName = 'home-outline';
              break;
            case 'Cartilla':
              iconName = 'search-outline';
              break;
            case 'Tramites':
              iconName = 'document-text-outline';
              break;
            case 'Mas':
              iconName = 'menu-outline';
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#005EB8',
        tabBarInactiveTintColor: '#888',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name="Cartilla" component={CartillaScreen} />
      <Tab.Screen name="Tramites" component={TramitesScreen} options={{ title: 'Trámites' }} />
      <Tab.Screen name="Mas" component={MasScreen} options={{ title: 'Más' }} />
    </Tab.Navigator>
  );
};

export default BottomTabs;