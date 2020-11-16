import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native'
import { Input, Button} from 'react-native-elements';
import axios from 'axios'
import {showAlert} from '../../utils/alerts'
import {useNavigation} from '@react-navigation/native';
import {getProducts} from '../../store/actions/Products';
import {API_URL} from "@env";


export default function SignInComponent() {
    
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [btnEnable, setButtonState] = useState(true)
    const [processingRequest, setRequestState] = useState(false)

    const product = {
        name:name,
        price:price,
        image: "",
        status:true
    }

    const registerProducto = async()=>{

        setRequestState(true);
        const response = await axios.post(
            `${API_URL}/product/register`,{
                product:product
            }
          );
          setRequestState(false);

          console.log(response.data)

          if(response.data.isSuccessFull){
              dispatch(getProducts());
              navigation.goBack()
          }else{
            showAlert(`${response.data.message}`)
            setRequestState(false);
          }

    
    }

  
    const changeText = (text:string)=>{

        if( text.length ==0 || name.length==0 || price.length==0){
            setButtonState(true)
        }else            
            setButtonState(false)

    }

    return (
        <SafeAreaView style={styles.container}>

            { !processingRequest ?  (
                <>
      <Input  value = {name} onChangeText = {(text)=> { setName(text); changeText(text)} } placeholder="Nombre"  />
      <Input keyboardType= {"numeric"}  value = {price} onChangeText = {(text)=> {setPrice(text); changeText(text)}} placeholder="Precio"  />
      <Button disabled = {btnEnable} onPress = {registerProducto} title="Registrar"/>
           </>
            ):(
                <>
                <ActivityIndicator
          color="blue"
          size="large"
          style={styles.activityIndicator}
        />
        </>
            ) } 
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin:15,
        backgroundColor:'#F3F3F3'
    },
    textfields: {
        marginBottom: 50,
        width: '100%',
        fontSize:40,
        textAlign:"center"
    },activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
      },
      error:{
          padding:30
      },
      title:{
        padding:30
    },
})
