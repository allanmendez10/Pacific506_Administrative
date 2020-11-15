
import {Alert} from 'react-native'
 
 

  export const showAlert = (message:string,title:string ="Atención") => {
    
    Alert.alert(
        title,
        message,
        [
          { text: "Cancel", style: 'cancel', onPress: () => {} },
          {
            text: 'Aceptar',
            onPress: ()=>{},
          },
        ],
        { cancelable: false }

      );

  };

  export const showAlertCallback = (message:string,onclick:()=>{} ,title:string ="Atención") => {
    
    Alert.alert(
        title,
        message,
        [
          { text: "Cancel", style: 'cancel', onPress: () => {} },
          {
            text: 'Aceptar',
            onPress: onclick,
          },
        ],
        { cancelable: false }

      );

  };