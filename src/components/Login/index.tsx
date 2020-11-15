import React, {useState}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux'
import {login} from '../../store/actions/Login';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginComponent  = () => {
    const dispatch = useDispatch();

    const [isButtonEnable, setButtonState] = useState(true)
    const [isLoading, setButtonLoading] = useState(false)
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")
    const navigation = useNavigation();

    const validateLogin = (text:string, isUser:boolean = false) =>{

        if(user.length>0 && password.length>0){
            setButtonState(false)
        }else{
            setButtonState(true)
        }

        if(isUser)
            setUser(text)
        else
            setPassword(text)

    }


    const  onLogIn = ()=>{

        dispatch(login(user,password))

    }

    const  signIn = ()=>{

        navigation.navigate("SignIn")
        //dispatch(login(user,password))

    }
    


    return (
        <View style={styles.container}>
            <Text style= {styles.title}>Pacific 506</Text>
            <Input leftIcon={<Icon name='ios-mail-sharp' size={24} color='black'/>}  value = {user} onChangeText = {(text)=>validateLogin(text, true)} placeholder="Correo electronico"  />
            <Input leftIcon={<Icon name='ios-lock-closed-sharp' size={24} color='black'/>}  value = {password} onChangeText = {(text)=>validateLogin(text)}  placeholder="Contraseña" secureTextEntry={true} />
            <Button loading = {isLoading} disabled = {isButtonEnable}  onPress = {onLogIn} title="Ingresar"/>        
            <View style={{flexDirection:'row', height: 50, marginTop:20, alignContent:"center", alignItems:"center"}}>
            <Text style ={styles.noAccount}>¿No tienes una cuenta?</Text>
            <Button  onPress= {signIn} type = "clear" title="Crea una"/>
            </View>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 30,
        backgroundColor:'#F3F3F3'
    },
    title: {
        marginBottom: 50,
        width: '100%',
        fontSize:40,
        textAlign:"center"
    },noAccount: {
        fontSize:18,
        textAlign:"left"
    },
})

export default LoginComponent

