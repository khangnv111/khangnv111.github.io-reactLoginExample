import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';   
import ResolveAuth from './src/context/ResolveAuth';
import Screens from './src/navigation/Screens';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuth,
  loginFlow: createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,  
  }), 
  mainFlow: Screens
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}}/>
    </AuthProvider>
  )
}
