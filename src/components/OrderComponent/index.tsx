import Order from 'models/modules/Order.interface';
import React, { ReactElement, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Props {
  order?:Order
}

const OrderComponent = ({order}:Props):ReactElement<Props> => {



  return (
    <View style={styles.container}>
     {/* <View style={styles.list}> */}
       {/* <Image source={{uri: product.image}} style = {styles.image}/> */}
       
        <View style={{flexDirection:'row', alignItems:"center", height: 40, justifyContent: "space-between", marginLeft:10, marginRight:10 }}>
      
        <Text style={styles.textFields}>{`Pedido de ${order?.client.name} ${order?.client.lastname}`}</Text>
        <Text style={styles.date}>{order?.date}</Text>

       </View>
        <Text style={styles.phone}>{`+506 ${order?.client.telefono}`}</Text>

        <View style={{flexDirection:'row', height: 50, justifyContent: "space-between", marginRight:10 }}>
        <Text style={styles.orderState}>{"No entregado"}</Text>

        </View>    
      {/*  <View>
        <Text style={styles.textFields}>{`Pedido de ${order.client.name} ${order.client.lastname}`}</Text>
        <Text style={styles.textFields}>₡{order.client.telefono} x Kg</Text>

        </View>
       
      <GenericComponent/> */}

        {/*</View> */}
      
      {/*</View> */}
    </View>
  );
};

export default OrderComponent;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    marginBottom: 20,
    padding:10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fafafa',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  list: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  textFields: {
    color: 'black',
    textAlign: 'left',
    width: '60%',
    fontSize: 17,
    fontWeight:"bold"
  },  phone: {
    color: 'black',
    textAlign: 'left',
    marginLeft: 5,
    marginBottom: 10,
    width: '100%',
    fontSize: 17,
  },
  orderState: {
    color: 'white',
    textAlign: 'center',
    marginLeft: 5,
    marginBottom: 5,
    fontWeight:"bold",
    width: '100%',
    fontSize: 17,
    backgroundColor:'green',
    padding:10
  }, date: {
    color: 'black',
    textAlign: "right",
    width: '30%',
    fontSize: 17,
  },
  image: {
    width: '100%',
    height: '75%',
    marginBottom: 15,
  }
});
