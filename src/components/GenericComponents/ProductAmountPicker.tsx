import React, {useState} from 'react'
import { View, Text, StyleSheet, Button,TouchableOpacity, TextInput,Alert} from 'react-native'
import { Checkbox } from 'react-native-paper';



const ProductAmountPicker = () => {

    const [amount, setAmount] = useState('');
    const [checked, setChecked] = useState(false);
    const [decimal, hideDecimal] = useState('');

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Atención",
      "Solamente puede ingresar un decimal igual a 5",
      [
        { text: "OK"}
      ],
      { cancelable: false }
    );


    const onChanged = (text:string) => {

        //console.log(text);
        text = text.replace('.','');
        text = text.replace(',','');

        if(text.length<=2 &&!checked){
        setAmount(text);
        }
        
    }


return (
    <View style={{flexDirection:'row', alignItems: "center"}}>
    
    
<TextInput
      style={styles.textInput}
      placeholder = 'Cantidad'
      keyboardType ="numeric"
      onChangeText={(text)=> onChanged(text)}
      value = {`${amount}${decimal}`}
      maxLength={4}
      />
      <Text style ={styles.text}>Kg</Text>
      <Checkbox
      color = '#2E99F7'
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        if(amount.length>0 && amount.length<=2){
        setChecked(!checked)  
        hideDecimal(!checked?',5':'');
        }
      }}
    />
              </View>
)

}

export default ProductAmountPicker

const styles = StyleSheet.create({
    textInput:{
        height: 40, 
        width : 100, 
         borderWidth: 1 , 
         padding: 5,
         textAlign: "right",
         fontSize : 17
      },
      text:{
        marginLeft:5,
        fontSize: 15
      },decimal:{
        fontSize: 17,
        marginLeft: 3
      }
})
