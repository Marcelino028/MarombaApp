import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Home from  './src/pages/Home'
import Login from  './src/pages/Login'
import Cadastro from './src/pages/Cadastro'
import NextCadastro from './src/pages/NextCadastro'
import FinishCadastrar from './src/pages/FinishCadastrar'





const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          title: '',
          headerTrasparent: true,
          headerShown: false,
        }}
        name="Home" component={Home}/>

        <Stack.Screen 
        options={{
          title: '',
          headerTrasparent: true,
          headerShown: false,
        }}
        name="Login" component={Login}/>

        <Stack.Screen 
        options={{
          title: '',
          headerTrasparent: true,
          headerShown: false,
        }}
        name="Cadastro" component={Cadastro}/>

        <Stack.Screen 
        options={{
          title: '',
          headerTrasparent: true,
          headerShown: false,
        }}
        name="NextCadastro" component={NextCadastro}/>

        <Stack.Screen 
        options={{
          title: '',
          headerTrasparent: true,
          headerShown: false,
        }}
        name="FinishCadastrar" component={FinishCadastrar}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

