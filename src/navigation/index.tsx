import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './DrawerNavigator';

const RootNavigator = (): ReactElement => {

  //const reduxLoaded = useSelector((state:State) => state.user.is_logged);

  return (
    <NavigationContainer>
      
      <MainNavigator />
    
    </NavigationContainer>
  );
}

export default RootNavigator;
