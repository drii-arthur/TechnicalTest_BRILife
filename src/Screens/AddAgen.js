import React, { Component } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StyleSheet,
    Dimensions,
    CheckBox,
    Picker
 } from "react-native";
 import DateTimePickerModal from "react-native-modal-datetime-picker";
 import Icon from 'react-native-vector-icons/Ionicons'


 import Header from '../Component/Header'
 import List from '../Component/List'
 import DatePicker from '../Component/DatePicker'

 const {width,height} = Dimensions.get('window')
 const data = [
    {
    id:1,
    nama:'juned',
    },
    {
        id:2,
        nama:'jufri',
     },
     {
        id:3,
        nama:'jufle',
     }
]
 class Profile extends Component {
     constructor(){
         super()
         this.state = {
            setDatePickerVisibility : false,
            setDatePickerVisibility2 : false,
            startDate :'',
            endDate:'',
            isSelected:true,
            selectedValue:'',
            selectedValue2:''
         }
     }
    showDatePicker = () => {
        this.setState({
            setDatePickerVisibility:true
        })
         console.log(this.state.setDatePickerVisibility)
       };

       showDatePicker2 = () => {
        this.setState({
            setDatePickerVisibility2:true
        })
         console.log(this.state.setDatePickerVisibility2)
       };
      
       hideDatePicker = () => {
         this.setState({
             setDatePickerVisibility:false
         })
       };

       hideDatePicker2 = () => {
        this.setState({
            setDatePickerVisibility2:false
        })
      };
      
    handleConfirm = (date) => {
         console.log("A date has been picked: ", date);
         const result = JSON.stringify(date)
         this.setState({
             startDate:result.replace(/['"]+/g,'')
         })
         this.hideDatePicker();
       };
    confirm2 = (date) => {
        const result = JSON.stringify(date)
        this.setState({
            endDate:result.replace(/['"]+/g,'')
        })
        this.hideDatePicker2();
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
         return(
             <View style={{flex:1}}>
                 <Header/>                
                 <ScrollView style={{padding:10,backgroundColor:'#fff'}}>

                    <List
                    title='Pilih Nama Agen'
                    onChangeValue={(itemValue) => {this.setState({selectedValue:itemValue})}}
                    selectedValue={this.state.selectedValue} 
                    data={data} />

                    <List
                    title='Nama Atasan'
                     onChangeValue={(itemValue) => {this.setState({selectedValue2:itemValue})}}
                     data={data}
                     selectedValue={this.state.selectedValue2}
                     />

                     <DatePicker
                        visible={this.state.setDatePickerVisibility}
                        dataDate={this.state.startDate}
                        title='Mulai berlaku'
                        show={() => this.showDatePicker()}
                        hide={this.hideDatePicker}
                        confirm={this.handleConfirm}
                     />

                    <DatePicker
                        visible={this.state.setDatePickerVisibility2}
                        dataDate={this.state.endDate}
                        title='Akhir berlaku'
                        show={() => this.showDatePicker2()}
                        hide={this.hideDatePicker2}
                        confirm={this.confirm2}
                     />

                
                
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
                        style={{backgroundColor:'#2962ff',borderRadius:10,width:width/3.5,height:50,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'#fff',fontWeight:'bold'}}>Save</Text>
                        </TouchableOpacity>
                    </View>   
                </View>
                 </ScrollView>
             </View>
         )
     }
 }

 export default Profile

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