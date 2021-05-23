import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Alert,
    StyleSheet,
    ScrollView,
    Linking
} from 'react-native';
//Utils
import colors from '../utils/colors';
import fonts from '../assets/fonts/'

//Components
import DrawerItem from './DrawerItem';
import icons from '../assets/icons';

export default class CompanyDrawerContent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
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
                         <DrawerItem
                        title={'Drawer not Design'}
                        // imageSource={icons.drawerTerms}
                        titleStyle={styles.textHeading}
                        onPress={() => {
                        }}
                        />
                        {/* <DrawerItem
                            containerStyle={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}
                            titleStyle={styles.textHeading}
                            title={'Logout'}
                            imageSource={icons.drawerLogout}
                            onPress={() => {
                                // this.logout()
                            }}
                        /> */}
                        {/* <Loader loading={this.state.loading} /> */}
                    </View>
                    <TouchableOpacity style={{ width: '28%', paddingTop: 55, marginStart: 20 }}>
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