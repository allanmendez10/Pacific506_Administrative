import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
const Drawer = createDrawerNavigator();
import Profile from '../components/Profile'

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />      
      <Drawer.Screen name="Perfil" component={Profile} />      

    </Drawer.Navigator>
  );
};

export default MainNavigator;
