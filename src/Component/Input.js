import React,{ Component } from "react";
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
 } from "react-native";

 export default class Input extends Component {
     constructor(props){
         super(props)
     }
     render(){
         const {title} = this.props
         return(
            <View style={{marginTop:10,flexDirection:'row'}}>
            <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{color:'grey'}}>{title}</Text>
            </View>
            <View style={{flex:2}}>
                <TextInput
                placeholder='ketik di sini ...'
                style={styles.input}
                />     
            </View>   
        </View>
         )
     }
 }

 const styles = StyleSheet.create({
    input:{
        paddingHorizontal:10,
        borderRadius:10,
        backgroundColor:'#fff',
        marginTop:5,
        borderWidth:1,
        borderColor:'grey'
    }
 })