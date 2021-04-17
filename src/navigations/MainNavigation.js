// import 'react-native-gesture-handler';
import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import MainScreen from '../component/main';
import ListScreen from '../component/ListMusic'
// import Splast from '../component/Splast'
import { View } from 'react-native';
// const Stack = createStackNavigator();
const MainNavigation = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>

    //     <Stack.Screen
    //       name="List"
    //       component={ListScreen}
    //       options={{ headerShown: null }} />

    //     <Stack.Screen
    //       name="Home"
    //       component={MainScreen}
    //       options={{ headerShown: null }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
   
      <ListScreen />
    
  );
};

export default MainNavigation;