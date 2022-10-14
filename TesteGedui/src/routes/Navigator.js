import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Auth from '../views/Auth';
import Home from '../views/Home';
import About from '../views/About';
import SplashScreen from '../views/SplashScreen';
import commonStyles from '../config/styles';
import Menu from '../components/Menu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const menuConfig = {
  labelStyle: {
    fontFamily: commonStyles.fontFamily,
    fontWeight: 'normal',
    fontSize: 20,
  },
  activeTintColor: '#080',
};

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContentOptions={menuConfig}
    drawerContent={(props) => <Menu {...props} />}
  >
    <Drawer.Screen name="Home" options={{ title: 'Inicio' }}>
      {(props) => <Home {...props} />}
    </Drawer.Screen>
    <Drawer.Screen name="About" options={{ title: 'Sobre' }}>
      {(props) => <About {...props} />}
    </Drawer.Screen>
  </Drawer.Navigator>
);

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="Auth" component={Auth} />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="Home" component={DrawerNavigator} />
  </Stack.Navigator>
);

const Navigator = () => (
  <NavigationContainer>
    <AuthNavigator />
  </NavigationContainer>
);

export default Navigator;
