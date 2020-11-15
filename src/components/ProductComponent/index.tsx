import React, {ReactElement, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../store/actions/Products';
import {useNavigation} from '@react-navigation/native';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { Icon } from 'react-native-elements'

import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import State from 'models/State.interface';
import ProductComponent from '../ProductComponent/main';
import Product from 'models/modules/Product.interface';

const MainContainer = (): ReactElement => {
  const dispatch = useDispatch();

  const reduxOrders = useSelector((state:State) => state.products.products);
  const reduxLoaded = useSelector((state:State) => state.products.loaded);
  const navigation = useNavigation();


  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts, dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      {reduxLoaded ? (
        <>
          <ScrollView style = {styles.scrollView}>
            {reduxOrders.map((order:Product) => (
              <ProductComponent
                key={order.id}
                product={order}
              />
            ))}
          </ScrollView>
        </>
      ) : (
        <ActivityIndicator
          color="#bc2b78"
          size="large"
          style={styles.activityIndicator}
        />
      )}

<Icon
  reverse
  name='add'
  type='ionicon'
  color='#2E99F7'
  onPress={() => navigation.navigate("RegisterProduct")}
  containerStyle = {styles.icon}
/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  footer: {
    width: '100%',
    backgroundColor: '#2E99F7',
    padding: 20,
    alignItems: 'center',
    marginBottom: 3
  },
  footerText: {
    color: 'white',
    fontSize: 18,
  },
  scrollView: {
    height: '10%',
    display: 'flex',
    flexDirection: 'column',
    
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  icon:{
    alignItems:"flex-end",
    alignContent: "flex-end",
    textAlign:"center",
    paddingRight:30,
    marginBottom:20,
    width:'100%',
  }
});

export default MainContainer;
