import React, {useState} from "react";
import { 
    View,
    StyleSheet,
    Text,
    TextInput,
    Dimensions,
    ScrollView,
    Picker,
    CheckBox
 } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Input from "../Component/Input";

 const {width,height} = Dimensions.get('window')
 

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            setDatePickerVisibility : false,
            date :'',
            selectedValue:'',
            isSelected:true
        }
    }
 


  changeStatus = () => {
      if(this.state.isSelected == false){
          this.setState({
              isSelected:true
          })
      }
      else{
          this.setState({
              isSelected:false
          })
      }
  }
        render(){
            const {navigation} = this.props
            console.log(this.state.date)
         return(
            <ScrollView style={{flex:1,backgroundColor:'#fff',padding:20}}>
                <Input title='No Lisensi' />

                <Input title='Nama Agen' />

                <View style={{marginTop:10,flexDirection:'row',paddingVertical:5}}>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{color:'grey'}}>Level Agen</Text>
                    </View>
                    <View style={{flex:2,borderColor:'grey',borderWidth:1,borderRadius:10,paddingHorizontal:5}}>
                    <Picker
                  selectedValue={this.state.selectedValue}
                  onValueChange={(itemValue, itemIndex) => this.setState({selectedValue:itemValue})}
                  >
                    <Picker.Item label='RM' value='RM' />
                    <Picker.Item label='SM' value='SM' />
                    <Picker.Item label='UM' value='UM' />
                    <Picker.Item label='FU' value='FU' />
                  </Picker> 
                    </View>   
                </View>

                <Input title="wilayah kerja" />

                <View style={{marginTop:10,flexDirection:'row'}}>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={{color:'grey'}}>Status</Text>
                    </View>
                    <View style={{flex:2,flexDirection:'row',alignItems:'center'}}>
                        <CheckBox
                            value={this.state.isSelected}
                            onValueChange={() => {this.changeStatus()}}
                        />
                        <Text>Aktif</Text>
                    </View>   
                </View>

                <View style={{marginTop:10,flexDirection:'row',marginBottom:20}}>
                    <View style={{flex:1,justifyContent:'center'}}>
                    </View>
                    <View style={{flex:2,flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity
                        onPress={() => {navigation.navigate('addAgen')}} 
                        style={{backgroundColor:'#2962ff',borderRadius:10,width:width/3.5,height:50,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>Save</Text>
                        </TouchableOpacity>
                    </View>   
                </View>


                        
                    </ScrollView>
         )  
        }  
 }

 const styles = StyleSheet.create({
     bodyForm:{
         flex:1,
         paddingHorizontal:20,
         width:width,
         paddingVertical:20,
         backgroundColor:'#fff',
         borderBottomRightRadius:35,
         borderBottomLeftRadius:35,
     },
     input:{
         paddingHorizontal:10,
         borderRadius:10,
         backgroundColor:'#fff',
         marginTop:5,
         borderWidth:1,
         borderColor:'grey'
     }
 })

 export default Form