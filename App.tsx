import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import MapScreen from './src/screens/MapScreen';
import ScannerScreen from './src/screens/ScannerScreen';
import SpeciesDetailScreen from './src/screens/SpeciesDetailScreen';

// Tabs
export type TabParamList = {
  Inicio: undefined;
  Mapa: { focusSpeciesId?: string } | undefined;
  Scanner: undefined;
};

// Stack raiz
export type RootStackParamList = {
  Tabs: NavigatorScreenParams<TabParamList>;
  SpeciesDetail: { id: string };
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#020617', borderTopColor: '#1f2937' },
        tabBarActiveTintColor: '#4ade80',
        tabBarInactiveTintColor: '#9ca3af',
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen as any}
        options={{ tabBarLabel: 'Início', tabBarIcon: () => <Text>🏠</Text> }}
      />
      <Tab.Screen
        name="Mapa"
        component={MapScreen}
        options={{ tabBarLabel: 'Mapa', tabBarIcon: () => <Text>🗺️</Text> }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{ tabBarLabel: 'Scanner', tabBarIcon: () => <Text>📷</Text> }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SpeciesDetail"
          component={SpeciesDetailScreen}
          options={{ title: 'Espécie' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
