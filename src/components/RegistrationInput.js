import React from 'react';
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity, Platform } from 'react-native'
import icons from './../assets/icons'
import LinearGradient from 'react-native-linear-gradient';
import colors from './../utils/colors'
import fonts from '../assets/fonts';

var isFocus = false
const InputBox = (props) => {
    return (
        <View style={[style.mainContainer, props.customStyle]}>
            {props.isShowTitle === true ?
                null :
                <Text style={style.titleStyle}>{props.title}</Text>
            }
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[props.gradientColor===true ? '#1C2731' : colors.gradientTxtOne, props.gradientColor===true ? '#1C2731' : colors.gradientTxtTwo]} style={[{ height: 40,flexDirection: 'row', alignItems: 'center',borderRadius:8}, props.inputCont]}>
            {props.isLeft === true &&
                        <Image
                            source={icons.searchIcon}
                            style={style.searchIcon}
                        />
                }
                <TextInput
                    editable={props.editable}
                    autoCapitalize={props.autoCapitalizes}
                    inputAccessoryViewID={props.inputAccessoryViewID}
                    placeholderTextColor={'#B7BEC3'}
                    maxLength={props.maxLength}
                    placeholder={props.txtPlacHolder}
                    keyboardType={props.tholder}
                    style={[style.inputField, props.customInputStyle]}
                    onFocus={() => {
                        isFocus = true
                        if (typeof props.onFocus == 'function') {
                            props.onFocus()
                        }
                    }}
                    onChangeText={(text) => {
                        if (typeof props.onChangeText == 'function') {
                            props.onChangeText(text)
                        }
                    }}
                    value={props.val}
                    multiline={props.multiline}
                    secureTextEntry={props.secureType}

                />
                {props.isRight === true &&
                    <TouchableOpacity onPress={props.clickAction} >
                        <Image
                            source={props.secureType === true ? icons.passwordCheckIcon : icons.hideEye}
                            style={props.secureType === true ? style.rightShow : style.rightHide}
                        />
                    </TouchableOpacity>
                }
            </LinearGradient>
        </View>
    )
}
export default InputBox
const style = StyleSheet.create({
    mainContainer: {
        height: 40,
        backgroundColor: '#1C2731',
        justifyContent: 'center',
        borderBottomWidth: .5,
        borderColor: '#031A2E',
        borderRadius: 8
        // marginRight: Platform.OS === 'ios' ? 0 : 15
    },
    titleStyle: {
        fontSize: 12,
        color: '#61707F',
        marginTop: 8,
        marginLeft: 3,
        position: 'absolute',

        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
    },
    inputField: {
        // fontWeight: '400',
        fontFamily:fonts.Regular,
        height: 25,
        width: '89%',
        height: 43,
        marginEnd: 10,
        fontSize: 14,
        lineHeight: 22,
        paddingLeft:10,
        color: '#B7BEC3'
    },
    rightShow: {
        width: 30,
        height: 25,
        resizeMode: 'contain'
    },
    rightHide: {
        width: 25,
        height: 22,
        resizeMode: 'contain'
    },
    searchIcon:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft:10,
    },
});




