import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Alert,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Linking,
    Platform
} from 'react-native';
import Preference from 'react-native-preference'
import Share from 'react-native-share';

//Utils
import colors from '../utils/colors';
import fonts from '../assets/fonts/'
import preferenceKeys from '../utils/preferenceKeys';
import { API, requestPost, requestGet } from "./../network/Api";
import Loader from './Loader'
//Components
import DrawerItem from './DrawerItem';
import icons from '../assets/icons';
import BackgroundService from 'react-native-background-actions';
const backgroundService = async () => {
    await BackgroundService.stop();
}
export default class CompanyDrawerContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false

        }
    }
    
         onShare = async () => {
            // const url = Platform.OS==='android' ? 'https://play.google.com/store/apps/details?id=com.maahir&hl=en_IN' : 'https://apps.apple.com/pk/app/maahir/id1561312598';
            const url = 'Android Link: https://play.google.com/store/apps/details?id=com.maahir&hl=en_IN \nIOS Link: https://apps.apple.com/pk/app/maahir/id1561312598' ;
            const title = 'Maahir App';
            const message = `Hi there! Sign up on MAAHIR using this link. Book now and get your repairs done at your doorstep.\nReferral Code : ${Preference.get('maahirUserObject').code}\n` ;
            const options = {
                title,
                subject: title,
                message: `${message} ${url}`,
              }
            Share.open(options)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              err && console.log(err);
            });
        }
    logout() {
        this.setState({ loading: true })
        console.log('tokennnnn--->', Preference.get('maahirUserObject').id)
        let formData = new FormData()
        formData.append("user_id", Preference.get('maahirUserObject').id)
        requestPost(API.LOGOUT, formData).then((response) => {
            this.setState({ loading: false })
            if (response.response_status === '1') {
                console.log('response logout ', response)
                backgroundService()             
                Preference.clear();
                this.props.navigation.reset({ index: 0, routes: [{ name: 'AuthStack' }] });
            }
            else{
                Alert.alert(
                    "Error",
                    '' + response.msg,
                    [ { text: "OK", onPress: () => { } }]
                );
            }
        }).catch((error) => {
            this.setState({ loading: false })
            alert('Please try again')
            console.log('error logout', error)
        })
    }
    render() {
        const { navigation } = this.props
        return (
            <ScrollView
                bounces={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ width: '100%', height: '100%', flexDirection: 'row', }}>
                    <View style={styles.drawerContainer}>
                        <Image
                            style={styles.logoImg}
                            source={icons.logoIcon}
                        />
                        <DrawerItem
                            //  containerStyle={{ marginTop:20 }}
                            title={'Home'}
                            imageSource={icons.drawerHome}
                            titleStyle={styles.textHeading}
                            containerStyle={{ marginTop: 0 }}
                            onPress={() => {
                                navigation.toggleDrawer()
                            }}
                        />
                        <DrawerItem
                            title={'My Profile'}
                            imageSource={icons.drawerComplete}
                            titleStyle={styles.textHeading}
                            onPress={() => {
                                navigation.navigate('ProfileScreen')
                            }}
                        />
                        <DrawerItem
                            title={'Completed Jobs'}
                            imageSource={icons.drawerComplete}
                            titleStyle={styles.textHeading}
                            onPress={() => {
                                navigation.navigate('CompletedJob')
                            }}
                        />
                        {/* <DrawerItem
                            title={'Ongoing Jobs'}
                            imageSource={icons.drawerOngoing}
                            titleStyle={styles.textHeading}
                            // containerStyle={{ marginTop: 0 }}
                            onPress={() => {
                                navigation.navigate('CurrentdJob')
                            }}
                        /> */}
                        <DrawerItem
                            title={'Tell A Friend'}
                            imageSource={icons.drawerFriend}
                            titleStyle={styles.textHeading}
                            onPress={() => {
                                this.onShare()
                            }}
                        />
                        <DrawerItem
                            title={'Term and Conditions'}
                            imageSource={icons.drawerTerms}
                            titleStyle={styles.textHeading}
                            onPress={() => {
                                Linking.openURL("https://maahirpro.com/")
                                // navigation.navigate('CompletedJob')
                            }}
                        />
                         <DrawerItem
                            title={'Privacy Policy'}
                            imageSource={icons.drawerTerms}
                            titleStyle={styles.textHeading}
                            onPress={() => {
                                Linking.openURL("https://maahirpro.com/")
                                // navigation.navigate('CompletedJob')
                            }}
                        />
                          <DrawerItem
                            title={'Contact Us'}
                            imageSource={icons.drawerOngoing}
                            titleStyle={styles.textHeading}
                            // containerStyle={{ marginTop: 0 }}
                            onPress={() => {
                                navigation.navigate('ContactUs')
                            }}
                        />
                        <DrawerItem
                            title={'About Us'}
                            imageSource={icons.drawerTerms}
                            titleStyle={styles.textHeading}
                            onPress={() => {
                                 navigation.navigate('AboutUs')
                            }}
                        />
                        <DrawerItem
                            containerStyle={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}
                            titleStyle={styles.textHeading}
                            title={'Logout'}
                            imageSource={icons.drawerLogout}
                            onPress={() => {
                                this.logout()
                            }}
                        />
                              <Loader loading={this.state.loading} />
                    </View>
                    <TouchableOpacity onPress={() => {
                        navigation.toggleDrawer()
                    }} style={{ width: '28%', paddingTop: 55, marginStart: 20 }}>
                        {/* <TouchableOpacity
                                onPress={() => {
                                    navigation.toggleDrawer()
                                }}
                            >
                                <Image
                                    style={{ width: 24, height: 24, resizeMode: 'contain', }}
                                    source={icons.hamburgerMain}
                                />
                            </TouchableOpacity> */}
                    </TouchableOpacity>


                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        // flex: 1,
        backgroundColor: colors.white,
        paddingTop: 50,
        height: '100%',
        width: '72%',
        borderRadius: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    textHeading: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: '700',
        fontFamily: fonts.Bold
    },
    logoImg: {
        width: '70%',
        height: 40,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 0,
        marginBottom: 20
    },
})