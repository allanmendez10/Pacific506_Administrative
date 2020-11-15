import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useSelector} from 'react-redux'
import State from 'models/State.interface';
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginComponent  = () => {

    const user = useSelector((state:State) => state.user.user);

    return (
        <SafeAreaView style={styles.container}>
            <Text h2 style ={{fontWeight:"bold"}}>Profile</Text>
            <Text h3 style ={styles.description}>   * {`${user?.name} ${user?.lastname}`}</Text>
            <Text h3 style ={styles.description}>   * {user?.email}</Text>
            <Text h3 style ={styles.description}>   * {`+506 ${user?.phone}`}</Text>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft:30,
        backgroundColor:'#F3F3F3'
    },
    description: {
        marginTop: 20,
        width: '100%',
        fontSize:40,
    },
})

export default LoginComponent

