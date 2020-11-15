import Product from 'models/modules/Product.interface';
import React, { ReactElement } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
 
interface Props {
  product:Product
}

const ProductComponet = ({product}:Props):ReactElement<Props> => {

  return (
    <View style={styles.container}>
      
        <Text style={styles.name}>{product.products.name}</Text>
        <Text style={styles.textFields}>₡{product.products.price} x Kg</Text>
        <Text style={styles.active}>{product.products.state?"Disponible":"No disponible"}</Text>

    </View>
       
  );
};

export default ProductComponet;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    padding:10,
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
  name: {
    color: 'black',
    textAlign: 'left',
    marginLeft: 5,
    marginBottom: 2,
    width: '100%',
    fontSize: 17,
    fontWeight:"bold"
  },
  textFields: {
    color: 'black',
    textAlign: 'left',
    margin:10,
    marginLeft: 5,
    marginBottom: 2,
    width: '100%',
    fontSize: 17,
  },
  active: {
    backgroundColor:'green',
    marginTop:10,
    color:'white',
    padding:10,
    width:'100%',
    textAlign:"center",
    fontSize:17,
    fontWeight:"bold"
  }
});
