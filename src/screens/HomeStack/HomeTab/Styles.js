import { StyleSheet } from 'react-native';
import fonts from './../../../assets/fonts/';
import Fonts from './../../../assets/fonts/'
import colors from './../../../utils/colors'
export const styles = StyleSheet.create({
  safeStyle: {
    flex: 1,
    // alignItems:'center' ,
    backgroundColor: colors.background
    // backgroundColor: 'red'
  },
  mainListView: {
    width: '100%',
  },
  itemMainContainer: {
    width: '45%',
    padding: 5,
    flex: 1,
    borderRadius:8,
    alignItems:'center'
  },
  imageContainer:{
    // backgroundColor:colors.background,
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
    // backgroundColor:'red'
  },
  listText:{
    marginTop:5,
    fontSize:11,
    fontFamily:fonts.Bold,
    color:colors.primary
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
    height:61,
    width:'60%',
    resizeMode:'contain',
    alignSelf:'center',
    marginTop:-33
  }
});
