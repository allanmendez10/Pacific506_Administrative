import React, {ReactElement, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getOrders} from '../../store/actions/Order';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import State from 'models/State.interface';
import Order from 'models/modules/Order.interface';
import OrderComponet from '../OrderComponent';

const MainContainer = (): ReactElement => {
  const dispatch = useDispatch();

  const reduxOrders = useSelector((state:State) => state.orders.orders);
  const reduxLoaded = useSelector((state:State) => state.orders.loaded);
  const navigation = useNavigation();

  const amount = 0;

  // Simulando el componentDidMount
  useEffect(() => {
    dispatch(getOrders());
  }, [getOrders, dispatch]);

  const goToBill = () => {

    navigation.navigate('BillContainer');

  }

  return (
    <SafeAreaView style={styles.container}>
      {reduxLoaded ? (
        <>
          <ScrollView style = {styles.scrollView}>
            {reduxOrders.map((order:Order) => (
              <OrderComponet
                key={order.id}
                order={order}
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
     {/* <TouchableOpacity onPress = {goToBill} style={styles.footer}>
        <Text
          style={
            styles.footerText
          }>{`Agregar al carrito. ₡ ${amount}`}</Text>
        </TouchableOpacity>  */}
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
});

export default MainContainer;
