import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    ScrollView,
    TextInput,
    Image,
    StatusBar,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { styles } from "./Styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient';
import colors from './../../../utils/colors'
import Button from './../../../components/Button'
import InputField from './../../../components/RegistrationInput'
import fonts from './../../../assets/fonts/'
import icons from "./../../../assets/icons/";
const Register = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [country, setCountry] = useState("");
    const [country2, setCountry2] = useState("");
    const [country3, setCountry3] = useState("");
    const [country4, setCountry4] = useState("");

    const loginClick = () => {
                    navigation.reset({ index: 0, routes: [{ name: 'HomeStack' }] });
    }
    return (
        <SafeAreaView style={styles.safeStyle}>
            <StatusBar barStyle='light-content' hidden={false} backgroundColor={'#222222'} translucent={false} />
            <ImageBackground source={icons.backgroundImage} style={styles.gradientStyle}>
                <TouchableOpacity
                    onPress={() => { navigation.goBack() }}
                    style={{ marginLeft: 25, marginTop: 15, marginBottom: 10 }}>
                    <Image source={icons.backContainer} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
                </TouchableOpacity>
                <KeyboardAwareScrollView style={{ paddingLeft: 30, paddingRight: 30 }} showsVerticalScrollIndicator={false}>
                    <Image source={icons.logoIcon} style={styles.logoStyle} />
                    <Text style={styles.logoTxt}>{'Hazır alıcılar, mutlu satıcılar.'}</Text>
                    <Text style={[styles.loginTxt, { color: 'white' }]}>{'Kayıt Olun'}</Text>
                    <InputField
                        txtPlacHolder={'Ad'}
                        val={country}
                        customStyle={{ marginTop: 13 }}
                        customInputStyle={{ color: colors.background, backgroundColor: 'transparent' }}
                        onChangeText={(text) => {
                            setCountry(text)
                        }}
                    />
                    <InputField
                        txtPlacHolder={'Soyad'}
                        val={country2}
                        customStyle={{ marginTop: 13 }}
                        customInputStyle={{ color: colors.background, backgroundColor: 'transparent' }}
                        onChangeText={(text) => {
                            setCountry2(text)
                        }}
                    />
                    <InputField
                        txtPlacHolder={'Ic'}
                        val={country3}
                        customStyle={{ marginTop: 13 }}
                        customInputStyle={{ color: colors.background, backgroundColor: 'transparent' }}
                        onChangeText={(text) => {
                            setCountry3(text)
                        }}
                    />
                    <InputField
                        txtPlacHolder={'Ilce'}
                        val={country4}
                        customStyle={{ marginTop: 13 }}
                        customInputStyle={{ color: colors.background, backgroundColor: 'transparent' }}
                        onChangeText={(text) => {
                            setCountry4(text)
                        }}
                    />
                    <Button
                        text={'Devam Et'}
                        textStyle={{ fontSize: 14, lineHeight: 20, fontFamily:fonts.Bold, color: '#B7BEC3' }}
                        backgroundColorStyle={{ width: '100%', borderRadius: 5, height: 45, marginTop: 11, }}
                        innerContainerCustomStyle={{ height: 40, borderRadius: 5, backgroundColor: colors.darkBtn }}
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
                    <Text style={styles.yeniTxt}>{'Giriş Yapın'}</Text>
                    <Text style={[styles.yeniTxt, { paddingLeft: 15, paddingRight: 15, marginBottom: 40 }]}>{'Kaydolarak veya giriş yaparak '}<Text style={styles.blueTxt}>Şartlar ve Koşullar </Text>ve <Text style={styles.blueTxt}>Gizlilik Politikasını </Text>kabul etmiş olursunuz.</Text>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
};
export default Register;
