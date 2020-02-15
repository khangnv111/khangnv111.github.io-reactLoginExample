import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';  

const switchNavigator = createSwitchNavigator({
  //ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,  
  }), 
});

export default createAppContainer(switchNavigator);

