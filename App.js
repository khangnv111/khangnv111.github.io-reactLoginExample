import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';  
import HomeScreen from './src/screens/HomeScreen';

const switchNavigator = createSwitchNavigator({
  //ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,  
  }), 
  mainFlow: HomeScreen
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}}/>
    </AuthProvider>
  )
}
