import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Bill from '../components/OrderComponent';
import SignIn from '../components/SignIn';
import HomeTabs from './BottomTabNavigator'
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import State from '../models/State.interface';
import Login from '../components/Login';
import AddProduct from '../components/ProductComponent/add';
import Perfil from '../components/Profile';

import Icon from 'react-native-vector-icons/Ionicons';
import {setIsLoggedRedux} from '../store/actions/Login';
import { Header } from 'react-native-elements'

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2E99F7',
    width: '100%',
    height: 100,
    paddingHorizontal: 5,
    marginBottom: 10
  },
  text: {
    fontSize: 28,
    color: 'white',
    textAlign: "center",
    width: '100%'
  },
  button: {
    width: 50,
  },
});

const Header1 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
     { <Button
        onPress={() => navigation.goBack()}
        title="Back" /> }
      <Text style={styles.text}>Pacific 506</Text>
      <View style={styles.button} />
    </SafeAreaView>
  );
};

const Header2 = () => {
  const navigation = useNavigation();
  return (
    <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
  );
};



export default function PostNavigator() {

  const reduxLoaded = useSelector((state:State) => state.user.is_logged);
  const dispatch = useDispatch();


  return (
    <Stack.Navigator
      initialRouteName="drawer"
      headerMode = 'float'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2E99F7',
        },  
        headerRightContainerStyle:{
          marginRight:10
        },    
        headerRight : () => (
            <Icon onPress = { ()=>{dispatch(setIsLoggedRedux(false))}} name="log-out" color={"white"} size={26} /> ),   
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
      }}>
       {reduxLoaded?(
         <>
      <Stack.Screen name="MainContainer" component={HomeTabs} options={{
          title: 'Pacific 506'}} />
      <Stack.Screen name="BillContainer" component={Bill} options={{ title: 'Detalle del pedido'}}/> 
      <Stack.Screen name="RegisterProduct" component={AddProduct} options={{  headerBackTitle:"Volver",title: 'Producto'}}/> 

       </>
       ):(   
         <>   
       <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> 
      <Stack.Screen name="SignIn" component={SignIn}  options={{title:"Registrar usuario", headerBackTitle:"Volver"}} />
      </>
       )}

    </Stack.Navigator>
  );
}
