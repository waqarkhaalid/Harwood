import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    Modal
} from "react-native";
import { styles } from "./Styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient';
import colors from './../../../utils/colors'
import Button from './../../../components/Button'
import InputField from './../../../components/RegistrationInput'
import fonts from './../../../assets/fonts/'
import icons from "./../../../assets/icons/";
const LoginScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState("");
    const [bookingAlertModal, setBookingAlertModal] = useState(false);

    const loginClick = () => {
        setBookingAlertModal(true)
    }
    const renderPasswordModal = () => {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={bookingAlertModal}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            {/* <TouchableOpacity
                                style={{ alignSelf: 'flex-end' }}
                                onPress={() => { setBookingAlertModal(false) }}>
                                <Image
                                    source={icons.crossIcon}
                                    style={styles.crossImg}
                                />
                            </TouchableOpacity> */}
                            <Button
                                img={icons.personIcon}
                                imageStyle={{width:20,height:45,resizeMode:'contain',marginRight:12}}
                                text={'Bireysel'}
                                textStyle={{ fontSize: 17, lineHeight: 20,fontFamily: fonts.SemiBold, color: colors.skyBtn }}
                                backgroundColorStyle={{ width: '100%', borderRadius: 15, height: 90, marginTop: 11 }}
                                innerContainerCustomStyle={{ height: 90, borderRadius: 15, backgroundColor: colors.darkBlack }}
                                clickAction={() => {
                                    setBookingAlertModal(false)
                                    navigation.navigate('Register')
                                }}
                            />
                            <View style={styles.barContainer}>
                                <View style={styles.bar} />
                                <Text style={styles.barTxt}>{'veya'}</Text>
                                <View style={styles.bar} />
                            </View>
                            <Button
                             img={icons.coprateIcon}
                             imageStyle={{width:35,height:35,resizeMode:'contain',marginRight:8}}
                                text={'Kurumsal'}
                                textStyle={{ fontSize: 17, lineHeight: 20, fontFamily: fonts.SemiBold,color: colors.skyBtn }}
                                backgroundColorStyle={{ width: '100%', borderRadius: 15, height: 90, marginTop: 11 }}
                                innerContainerCustomStyle={{ height: 90, borderRadius: 15, backgroundColor: colors.darkBlack }}
                                clickAction={() => {
                                    setBookingAlertModal(false)
                                    navigation.navigate('Register')
                                }}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.safeStyle}>
            {/* <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[colors.gradientOne, colors.gradientTwo]} style={styles.gradientStyle}> */}
            <ImageBackground source={icons.backgroundImage} style={styles.gradientStyle}>
                <KeyboardAwareScrollView style={{ paddingLeft: 30, paddingRight: 30 }} showsVerticalScrollIndicator={false}>
                    <Image source={icons.logoIcon} style={styles.logoStyle} />
                    <Text style={styles.logoTxt}>{'Hazır alıcılar, mutlu satıcılar.'}</Text>
                    <Text style={styles.loginTxt}>{'Üye Girişi'}</Text>
                    <InputField
                        txtPlacHolder={'Country'}
                        val={country}
                        customStyle={{ marginTop: 13 }}
                        customInputStyle={{ color: colors.background, backgroundColor: 'transparent' }}
                        onChangeText={(text) => {
                            setCountry(text)
                        }}
                    />
                    <Button
                        text={'Oturum Aç'}
                        textStyle={{ fontSize: 14, lineHeight: 20,fontFamily:fonts.Bold, color: '#B7BEC3' }}
                        backgroundColorStyle={{ width: '100%', borderRadius: 5, height: 45, marginTop: 11 }}
                        innerContainerCustomStyle={{ height: 40, borderRadius: 5, backgroundColor: colors.skyBtn }}
                        clickAction={() => {
                            loginClick()
                        }}
                    />
                    <View style={styles.barContainer}>
                        <View style={styles.bar} />
                        <Text style={styles.barTxt}>{'veya'}</Text>
                        <View style={styles.bar} />
                    </View>
                    <View style={styles.socialContainer}>
                        <Image source={icons.appleIcon} style={styles.socialIconStyle} />
                        <Image source={icons.googleIcon} style={[styles.socialIconStyle, { marginLeft: 15, marginRight: 15 }]} />
                        <Image source={icons.facebookIcon} style={styles.socialIconStyle} />
                    </View>
                    <Text style={styles.yeniTxt}>{'Yeni Hesap Oluşturun'}</Text>
                    <Text style={[styles.yeniTxt, { paddingLeft: 15, paddingRight: 15, marginBottom: 40 }]}>{'Kaydolarak veya giriş yaparak '}<Text style={styles.blueTxt}>Şartlar ve Koşullar </Text>ve <Text style={styles.blueTxt}>Gizlilik Politikasını </Text>kabul etmiş olursunuz.</Text>
                </KeyboardAwareScrollView>
            </ImageBackground>
            {/* </LinearGradient> */}
            {renderPasswordModal()}
        </SafeAreaView>
    );
};
export default LoginScreen;
