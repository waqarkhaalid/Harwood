import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Modal
} from "react-native";
import { styles } from "./Styles";
import fonts from './../../../assets/fonts/'
import icons from "./../../../assets/icons/";
import InputField from './../../../components/RegistrationInput'
import colors from './../../../utils/colors'
import Header from './../../../components/Header'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const HomeTab = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [mainlistView, setMainListView] = useState([
        { image: icons.buildIcon, name: 'Desgin and Build' },
        { image: icons.meetingIcon, name: 'meetings' },
        { image: icons.supplierIcon, name: 'Suppliers' },
        { image: icons.timelineIcon, name: 'Timeline' },
        { image: icons.timelineIcon, name: 'Timeline' },
        { image: icons.timelineIcon, name: 'Timeline' },
    ]);
    useEffect(() => {

    }, []);

    const renderMainItem = ({ item, index }) => {
        return (
            <View style={styles.itemMainContainer} >
                <View style={styles.imageContainer}>
                    <Image style={styles.listImage} source={item.image} />
                </View>
                <Text style={styles.listText}>{item.name}</Text>
            </View>
        )

    }
    return (
        <SafeAreaView style={styles.safeStyle}>
            <StatusBar barStyle='light-content' hidden={false} backgroundColor={colors.primary} translucent={false} />
            <View style={{height:'45%'}}>
            <ImageBackground style={styles.backgroundImage} source={icons.backgroundIcon} >
                <Header
                    onLeftAction={() => {  }}
                    leftIcon={icons.profileIcon}
                    leftButtonIconStyle={{ width: 17, height: 17 }}
                    rightButtonIconStyle={{ width: 22, height: 22 }}
                    rightIcon={icons.hamIcon}
                    onRightAction={() => {
                        navigation.toggleDrawer()
                       }}
                    // hearderText={'Timeline'}
                    hearderTextStyle={{marginLeft:15}}
                    // containerStyle={{  }}
                />
             <Image style={styles.logoImage} source={icons.logoIcon} />
            </ImageBackground>
            </View>
            <View style={{ backgroundColor: '#FFE6CF', borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingTop: 5, marginTop: -15, }}>
                <View style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: colors.background, }}>
                    <View style={{ marginTop: -88 }}>
                        <Text style={styles.nameStyle}>Hi, Edward Young</Text>
                        <Text style={styles.clientHeading}>CLIENT</Text>
                        <Image style={styles.profileImage} source={icons.personIcon} />
                    </View>
                        <View style={styles.mainListView}>
                            <FlatList
                                numColumns={2}
                                data={mainlistView}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                style={{flexGrow:1, width: '100%' }}
                                contentContainerStyle={{ flexGrow:1,width: '100%',paddingBottom:450 }}
                                renderItem={renderMainItem}
                                ListHeaderComponent={() => (!mainlistView.length ?
                                    <Text style={styles.emptyMessageStyle}>The list is empty</Text>
                                    : null)
                                }
                            />
                        </View>
                </View>
            </View>
        </SafeAreaView>
    );
};
export default HomeTab;
