import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import colors from './../utils/colors'
// import Fonts from './../assets/fonts/'
const Button = (props) => {
    return (
        <View style={[style.mainContainer, props.backgroundColorStyle]} >
            <TouchableOpacity onPress={props.clickAction} activeOpacity={props.opacity} style={[style.innerContainer,props.innerContainerCustomStyle]}>
                <Image style={props.imageStyle} resizeMode={'contain'} source={props.img} />
                <Text style={[style.txt, props.textStyle]}>{props.text}</Text>
                <Image style={props.imageStyleRight} resizeMode={'contain'} source={props.imgRight} />
            </TouchableOpacity>
        </View>
    )
}
export default Button
const style = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        height: 61,
        overflow: 'hidden'
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        backgroundColor: colors.skyBtn,
        borderRadius: 14,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    txt: {
        color: '#B7BEC3',
        fontWeight: '400',
        // fontFamily:Fonts.Medium,
        textAlign:'center'
    }
});




