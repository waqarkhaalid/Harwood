import React from 'react';
import { Image, View, Dimensions, Text, StyleSheet, Keyboard, } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerComponent from '../../components/DrawerComponentCustomer';

import { isIphoneX } from './../../utils/isIphoneX'
import icons from './../../assets/icons/'
import fonts from './../../assets/fonts/'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

//Screens
import HomeScreen from './HomeTab/'
import SecondTab from './SecondTab/'

//Utils
import colors from '../../utils/colors';

function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                keyboardHidesTabBar: true,
                style: {
                    height: 60,
                    width: '100%',
                    backgroundColor: colors.primary,
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15,
                    overflow: 'hidden',
                    borderTopWidth: 0,
                    shadowColor: "#000",
                },
            }}
            initialRouteName={'HomeScreen'}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'HomeScreen') {
                        if (focused)
                            return (
                                <View style={styles.activeContainer}>
                                    <Image source={icons.homeIcon} style={[styles.imageStyle,{tintColor:'#CBA783' }]} />
                                </View>
                            )
                        else
                            return (
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={icons.homeIcon} style={styles.imageStyle} />
                                </View>
                            )
                    }
                    if (route.name === 'SecondTab') {
                        if (focused)
                            return (
                                <View style={styles.activeContainer}>
                                    <Image source={icons.listIcon} style={[styles.imageStyle,{tintColor:'#CBA783' }]} />
                                </View>
                            )
                        else
                            return (
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={icons.listIcon} style={styles.imageStyle} />
                                </View>
                            )
                    }
                    if (route.name === 'thirdTab') {
                        if (focused)
                            return (
                                <View style={styles.activeContainer}>
                                    <Image source={icons.bellIcon} style={[styles.imageStyle,{tintColor:'#CBA783' }]} />
                                    <View style={{backgroundColor:'red',width:12,height:12,borderRadius:8,position:'absolute',top:2,right:5,alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{fontSize:8,color:'white'}}>1</Text>
                                    </View>
                                </View>
                            )
                        else
                            return (
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={icons.bellIcon} style={styles.imageStyle} />
                                    <View style={{backgroundColor:'red',width:12,height:12,borderRadius:8,position:'absolute',top:-4,right:-0,alignItems:'center',justifyContent:'center'}}>
                                        <Text style={{fontSize:8,color:'white'}}>1</Text>
                                    </View>
                                </View>
                            )
                    }
                    if (route.name === 'fourTab') {
                        if (focused)
                            return (
                                <View style={styles.activeContainer}>
                                    <Image source={icons.chatIcon} style={[styles.imageStyle,{tintColor:'#CBA783' }]} />
                                </View>
                            )
                        else
                            return (
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={icons.chatIcon} style={styles.imageStyle} />
                                </View>
                            )
                    }
                    if (route.name === 'fifthTab') {
                        if (focused)
                            return (
                                <View style={styles.activeContainer}>
                                    <Image source={icons.profileIcon} style={{ width: 20, height: 18, resizeMode: 'contain',tintColor:'#CBA783' }} />
                                </View>
                            )
                        else
                            return (
                                <View style={{ alignItems: 'center' }}>
                                    <Image source={icons.profileIcon} style={{ width: 20, height: 18, resizeMode: 'contain' }} />
                                </View>
                            )
                    }
                },
            })}

        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Tab.Screen
                name="SecondTab"
                component={SecondTab}
            />
            <Tab.Screen
                name="thirdTab"
                component={SecondTab}
            />
            <Tab.Screen
                name="fourTab"
                component={SecondTab}
            />
            <Tab.Screen
                name="fifthTab"
                component={SecondTab}
            />

        </Tab.Navigator >
    );
}



const HomeDrawerStack = (props) => (
    <Drawer.Navigator
        drawerStyle={{ backgroundColor: '#00000000', width: '100%', }}
        headerMode="none"
        initialRouteName='MyTabs'
        drawerContent={(props) => <DrawerComponent {...props} />}>
        <Drawer.Screen name="MyTabs" component={MyTabs} />
    </Drawer.Navigator>
)

/** Home Stack */
export default HomeStack = () => (
    <Stack.Navigator
        headerMode="none"
        initialRouteName='MyTabs'>
        <Stack.Screen name="HomeDrawerStack" component={HomeDrawerStack} />
        {/* <Stack.Screen name="MyTabs" component={MyTabs} /> */}
    </Stack.Navigator>
);


export const styles = StyleSheet.create({
    activeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: colors.skyBtn,
        padding: 6,
        borderRadius: 8
    },
    activeText: {
        fontSize: 11,
        fontFamily: fonts.Regular,
        color: colors.white,
        marginLeft: 5
    },
    unActiveText: {
        fontSize: 11,
        fontFamily: fonts.Regular,
        color: colors.white,
        marginTop: 5
    },

    imageStyle: { width: 20, height: 18, resizeMode: 'contain', tintColor: colors.white }
});