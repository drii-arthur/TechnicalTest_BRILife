import React,{ Component } from "react";
import { 
    View,
    Picker,
    StyleSheet,
    Dimensions,
    Text
 } from "react-native";

 const {width,height} = Dimensions.get('window')

 export default class List extends Component {
     render(){
         const {data,onChangeValue,selectedValue,title} = this.props
         return(
            <View style={{marginTop:10,flexDirection:'row',paddingVertical:5}}>
            <View style={{flex:1,justifyContent:'center'}}>
         <Text style={{color:'grey'}}>{title}</Text>
            </View>
            <View style={{flex:2,borderColor:'grey',borderWidth:1,borderRadius:10,paddingHorizontal:5}}>
            <Picker
          selectedValue={selectedValue}
          onValueChange={onChangeValue}
          >
              {data.map((datum) => {
                  return(
                    <Picker.Item label={datum.nama} value={datum.nama} />
                  )
              })}
          </Picker> 
            </View>   
        </View>
         )
     }
 }