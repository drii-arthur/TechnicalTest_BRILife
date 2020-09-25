import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  Picker,
  CheckBox
} from 'react-native';
import FAB from 'react-native-fab'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';

import Card from '../Component/Card'
import Header from '../Component/Header'

const {width,height} = Dimensions.get('window')


class HomePage extends Component{
  constructor(){
    super()
      this.state = {
        selectedValue:'',
        isSlected:true
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
  return (
        <View style={{flex:1}}>
          <StatusBar backgroundColor="#181a5d" />
            <Header/>

            <View style={{height:height/9,flexDirection:'row'}}>
              <View style={{flex:1,paddingHorizontal:10,paddingVertical:5}}>
                <Text>Pilih Wilayah kerja</Text>
                <View style={{paddingHorizontal:5,borderWidth:1,borderColor:'grey',borderRadius:5,height:40,justifyContent:'center'}}>
                  <Picker
                  selectedValue={this.state.selectedValue}
                  onValueChange={(itemValue, itemIndex) => this.setState({selectedValue:itemValue})}
                  >
                    <Picker.Item label='JAKARTA' value='JAKARTA' />
                    <Picker.Item label='BANDUNG' value='BANDUNG' />
                  </Picker>
                </View>
              </View>

              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1,paddingHorizontal:10,paddingVertical:5}}>
                  <Text>Status</Text>
                  <View  style={{justifyContent:'center',alignItems:'center',height:40,flexDirection:'row'}}>
                    <CheckBox
                      value={this.state.isSelected}
                      onValueChange={() => {this.changeStatus()}}
                    />
                    <Text style={{marginLeft:5}}>Aktif</Text>
                  </View>
                </View>
                <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                  <TouchableOpacity style={{backgroundColor:'#2962ff',borderRadius:7,paddingHorizontal:20,paddingVertical:10}}>
                    <Text style={{color:'#fff'}}>View</Text>
                  </TouchableOpacity>
                </View>
              </View>             
            </View>

            <Card 
              navigation={navigation}
              data={this.state.data} />
            
            <FAB buttonColor="#1e272e" iconTextColor="#FFFFFF" onClickAction={() => {navigation.navigate('add')}} visible={true} />
        </View>  
  );
  }
};


export default HomePage;

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor:"white",
  },
  body:{
    height: height/7,
    backgroundColor:'#1e272e',
    borderBottomRightRadius:45,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:25,
    color:'#fff',

  }
})
