import { StyleSheet } from 'react-native';
import fonts from './../../../assets/fonts/';
import Fonts from './../../../assets/fonts/'
import colors from './../../../utils/colors'
export const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
    // alignItems:'center' ,
    backgroundColor: colors.background
  },
  mainListView: {
    width: '100%',
    paddingLeft:15,
    paddingRight:15
  },
  itemMainContainer: {
    width: '100%',
    flexDirection:'row',
    // flex: 1,
    borderRadius:8,
    backgroundColor:'red',
    alignItems:'center',
    paddingLeft:15

  },
  imageContainer:{
    backgroundColor:colors.white,
    borderRadius:8,
    alignSelf:'center',
    padding:23,
    paddingLeft:37,
    paddingRight:37,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  listImage:{
    width:50,
    height:50,
    resizeMode:'contain',
  },
  backgroundImage:{
    width:'100%',
    height:'100%',
    resizeMode:'stretch',
  },
  profileImage:{
    width:115,
    height:115,
    resizeMode:'contain',
    alignSelf:'center',
    
  },
  clientHeading:{
    fontFamily:fonts.Regular,
    fontSize:13,
    color:'#FFE6CF',
    alignSelf:'center',
  },
  nameStyle:{
    fontFamily:fonts.Regular,
    fontSize:13,
    color:colors.white,
    alignSelf:'center'
  },
  logoImage:{
    height:71,
    width:127,
    resizeMode:'contain',
    alignSelf:'center',
    // backgroundColor:'red'
    // marginTop:-33
  },






  heading:{
    fontFamily:fonts.Bold,
    fontSize:22,
    marginTop:26,
    marginBottom:25,
    color:colors.primary,
    textAlign:'center'
  },
  countingContainer:{
    width:38,
    height:38,
    borderRadius:20,
    backgroundColor:'#A19386',
    alignItems:'center',
    justifyContent:'center'
  },
  countingStyle:{
    fontSize:15,
    fontFamily:fonts.Bold,
    color:'white'
  },
  listText:{
    fontSize:15,
    fontFamily:fonts.Regular,
    color:'#737373',
    width:'67%',
    // backgroundColor:'yellow',
    marginTop:2,
    marginLeft:10
  }
});
