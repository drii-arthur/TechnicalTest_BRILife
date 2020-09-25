import React from "react";
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    ImageBackground
 } from "react-native";
 import Icon from 'react-native-vector-icons/Ionicons'

 const {height} = Dimensions.get('window')
 const image = {uri:'https://lh3.googleusercontent.com/proxy/3rG9Xg_xG0hphslxQGyoDt9xXOPWGgmE875-rUQZYqntUNPq6m7z4IJDuCbKQaxL454elDOxleT4h3D7zCbb2SPRJEXS0zbny0wmK6i56zhZ'}


 class Header extends React.Component{
     constructor(props){
         super(props)
     }
     render(){
     return (
        <View style={styles.container}>
        <ImageBackground
        source={image}
        style={{flex:1}}
        resizeMode='contain'
        >               
        </ImageBackground>
      </View>
     
     )
    }
 }

 const styles = StyleSheet.create({
     container:{
        height:height/9,
        paddingVertical:10,
        elevation:5,
        backgroundColor:'#fff'
     }
 })

 export default Header