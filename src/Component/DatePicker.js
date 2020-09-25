import React,{ Component } from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
 } from "react-native";
 import DateTimePickerModal from "react-native-modal-datetime-picker";
 import Icon from 'react-native-vector-icons/Ionicons'

 class DatePicker extends Component {
     constructor(props){
         super(props)
     }
     render(){
     const {title,confirm,hide,dataDate,show,visible} = this.props
     return(
        <View style={{marginTop:10,flexDirection:'row'}}>
        <View style={{flex:1,justifyContent:'center'}}>
                <Text style={{color:'grey'}}>
                    {title}
                </Text>
        </View>
                <View style={{flexDirection:'row',backgroundColor:'#fff',height:45,borderRadius:10,borderColor:'grey',borderWidth:1,marginTop:5,flex:2}}>
                <View style={{flex:1,justifyContent:'center',paddingLeft:10}}>
                    {dataDate == '' ? 
                    <Text style={{color:'grey'}}>YYYY-MM-DD</Text>:
                    <Text style={{color:'black'}}>{dataDate.substr(0,10)}</Text>
                    }
                    
                </View>
                <TouchableOpacity
                onPress={() => {show()}} 
                style={{width:50,justifyContent:'center',alignItems:'center',
                borderTopRightRadius:10,borderBottomRightRadius:10,backgroundColor:'#3498db'}}>
                    <Icon name='calendar-sharp' color='#fff' size={20} />
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={visible}
                    mode="date"
                    onConfirm={confirm}
                    onCancel={hide}
                />
            </View>
            </View>
     )
    }
 }

 export default DatePicker