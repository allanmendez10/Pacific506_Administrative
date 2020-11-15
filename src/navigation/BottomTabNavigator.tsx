import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import Product from '../components/ProductComponent'; 
import Home from '../components/MainContainer'; 
import Profile from '../components/Profile'; 

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator  tabBarOptions={{
      activeTintColor: '#0166BF',
      inactiveTintColor: '#253645',
    }} lazy>
     
<Tab.Screen options={{
          tabBarIcon: ({color}:any) => (
            <MaterialCommunityIcons name="reader-outline" color={color} size={26} />
          )}} name="Pedidos" component={Home} />

      <Tab.Screen options={{
          tabBarIcon: ({color}:any) => (
            <MaterialCommunityIcons name="ios-cart" color={color} size={26} />
          ),
        }} name="Productos" component={Product} />

<Tab.Screen options={{
          tabBarIcon: ({color}:any) => (
            <MaterialCommunityIcons name="person" color={color} size={26} />
          ),
        }} name="Perfil" component={Profile} />
        
        
    </Tab.Navigator>
  );
}
