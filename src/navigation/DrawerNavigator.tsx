import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import index from 'components/ClientComponent';
const Drawer = createDrawerNavigator();
import MainContainer from '../components/MainContainer'
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
