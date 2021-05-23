import { StyleSheet } from 'react-native';
import fonts from '../../../assets/fonts';
import colors from './../../../utils/colors'
export const styles = StyleSheet.create({
  safeStyle:{ 
    flex: 1,
    alignItems:'center',
  },
  gradientStyle:{
    flex:1,
    width:'100%',
    height:'100%',
  },
  logoStyle:{
    height:85,
    width:'50%',
    resizeMode:'contain',
    alignSelf:'center',
    marginTop:95
  },
  logoTxt:{
    color:colors.white,
    alignSelf:'center',
    textAlign:'center',
    marginLeft:10,
    marginTop:-9,
    fontFamily:fonts.Regular,
  },
  loginTxt:{
    color:'#B7BEC3',
    alignSelf:'center',
    marginTop:80,
    fontFamily:fonts.Bold,
  },
  barContainer:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:20,
  },
  bar:{
    width:'35%',
    height:.5,
    backgroundColor:colors.white,
  },
  barTxt:{
    color:colors.white,
    alignSelf:'center',
    fontFamily:fonts.Regular
    },
    socialContainer:{
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginTop:18
    },
    socialIconStyle:{
      width:33,
      height:33,
      resizeMode:'contain'
    },
    yeniTxt:{
      color:'white',
      fontSize:12,
      fontFamily:fonts.Medium,
      alignSelf:'center',
      textAlign:'center',
      marginTop:20,
      lineHeight:17,
    },
    blueTxt:{
      color:colors.skyBtn,
      fontSize:12,
      fontWeight:'600',
      alignSelf:'center',
      textAlign:'center',
      fontWeight:'400'
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: colors.modalTransparency,
      alignItems: 'center',
      justifyContent: 'center'
  },
  modalContainer: {
      width: "65%",
      margin: 16,
      flexDirection: 'column',
      elevation: 10,
      backgroundColor: colors.dimBlack,
      borderRadius: 16,
      paddingLeft: 25,
      padding: 20,
      alignItems: 'center'
  },
});
