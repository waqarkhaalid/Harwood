import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Preference from 'react-native-preference'

//Creating Instance of Stack
const Stack = createStackNavigator();

//Screens
import Splash from './screens/Splash'

//Stacks
import AuthStack from './screens/AuthStack'
import HomeStack from './screens/HomeStack'

import preferenceKeys from './utils/preferenceKeys';

//Constants
import {
    TRAVELER,
    COMPANY,
} from './utils/constants'

/** Main Stack of the app */
const MainStack = () => {
    return (
        <Stack.Navigator headerMode="none" initialRouteName={"HomeStack"}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
    );
}

/** Theme will help to change app light mode to dark mode */
export default AppNavigator = () => {

    const MyTheme = {
        dark: false,
        colors: {
            primary: 'rgb(255, 45, 85)',
            background: 'rgb(255, 255, 255)',
            card: 'rgb(255, 255, 255)',
            text: 'rgb(28, 28, 30)',
            border: 'rgb(199, 199, 204)',
            notification: 'rgb(255, 69, 58)',
        },
    };

    return (
        <NavigationContainer theme={MyTheme}>
            <MainStack />
        </NavigationContainer>
    )
};
