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
import Timeline from 'react-native-timeline-flatlist'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const SecondTab = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [mainlistView, setMainListView] = useState([
        { image: icons.buildIcon, name: 'Desgin and Build' },
        { image: icons.meetingIcon, name: 'meetings' },
        { image: icons.supplierIcon, name: 'Suppliers' },
        { image: icons.timelineIcon, name: 'Timeline' },
        { image: icons.timelineIcon, name: 'Timeline' },
        { image: icons.timelineIcon, name: 'Timeline' },
        { image: icons.timelineIcon, name: 'Timeline' },
        { image: icons.timelineIcon, name: 'Timeline' },
    ]);
    useEffect(() => {

    }, []);

    const renderMainItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.itemMainContainer, { backgroundColor: index === 3 ? '#F0F0F0' : null }]} >
                <View style={{ alignItems: 'center' }}>
                    {index != 0 &&
                        <View style={{ height: 7, backgroundColor:index<5 ? '#A19386' : colors.primary, width: 7 }} />
                    }
                    <View style={[styles.countingContainer,{backgroundColor:index<5 ? '#A19386' : colors.primary}]} >
                        {index === 3 ?
                            <Image source={icons.tickIcon} style={{ width: 22, height: 22 }} />
                            :
                            <Text style={styles.countingStyle}>{index + 1}</Text>
                        }
                    </View>
                    {mainlistView.length != index + 1 &&
                        <View style={{ height: 7, backgroundColor:index<4 ? '#A19386' : colors.primary, width: 7 }} />
                    }
                </View>
                <Text style={styles.listText}>Lorem ipsum dolor sit amet consectetur</Text>
                <Image source={icons.forwardIcon} style={{ width: 8, height: 8, resizeMode: 'contain', alignSelf: 'center', position: 'absolute', right: 15 }} />
            </TouchableOpacity>
        )

    }
    return (
        <SafeAreaView style={styles.safeStyle}>
            <StatusBar barStyle='light-content' hidden={false} backgroundColor={colors.primary} translucent={false} />
            <View style={{ height: '35%' }}>
                <ImageBackground style={styles.backgroundImage} source={icons.backgroundIcon} >
                    <Header
                        onLeftAction={() => { }}
                        leftIcon={icons.profileIcon}
                        leftButtonIconStyle={{ width: 17, height: 17 }}
                        rightButtonIconStyle={{ width: 22, height: 22 }}
                        rightIcon={icons.hamIcon}
                        onRightAction={() => {
                            navigation.toggleDrawer()
                        }}
                        hearderText={'Timeline'}
                        hearderTextStyle={{ marginLeft: 15 }}
                    // containerStyle={{  }}
                    />
                    <Image style={styles.logoImage} source={icons.timeLineIcon} />
                </ImageBackground>
            </View>
            <View style={{ backgroundColor: '#FFE6CF', borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingTop: 5, marginTop: -15, }}>
                <View style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: colors.background, }}>
                    <Text style={styles.heading}> Critical Path Timeline</Text>
                    <View style={styles.mainListView}>
                        <FlatList
                            // numColumns={2}
                            data={mainlistView}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            style={{ width: '100%' }}
                            contentContainerStyle={{ flexGrow: 1, width: '100%', paddingBottom: 450 }}
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
export default SecondTab;
