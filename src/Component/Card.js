import React, { Component } from 'react'
import { 
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    ScrollView,
    TouchableOpacity
 } from "react-native";
 import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

 const {width,height} = Dimensions.get('window')


 class Card extends Component{
     constructor(props){
         super(props)
         this.state = {
          tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
          tableData: [
            ['1', '2', '3', '4'],
            ['a', 'b', 'c', 'd'],
            ['1', '2', '3', '456\n789'],
            ['a', 'b', 'c', 'd']]
          }
     }
     render(){
         const {navigation,data} = this.props
         const state = this.state;
     return (
        <ScrollView style={{paddingBottom:100,paddingHorizontal:10}}>

          <View style={{justifyContent:'center',alignItems:'center',paddingVertical:10}}>
            <Text style={{fontWeight:'bold',fontSize:18}}>Agen Level</Text>
            <Text style={{fontWeight:'bold',fontSize:18}}>Berdasarkan Wilayah Kerja</Text>
          </View>

          <View style={{flexDirection:'row',height:height/10,borderWidth:2,borderColor:'grey'}}>
            <View style={{padding:10,justifyContent:'center',alignItems:'center'}}>
            <Text>NO</Text>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',borderRightWidth:2,borderRightColor:'grey',borderLeftColor:'grey',borderLeftWidth:2}}>
              <Text>Wilayah</Text>
            </View>
            <View style={{width:width/10,flex:2}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center',borderBottomWidth:1,borderBottomColor:'grey'}}>
                <Text>Level Agen</Text>
              </View>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',borderRight:'grey',borderRightWidth:1}}>
                  <Text>RM</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',borderRight:'grey',borderRightWidth:1}}>
                  <Text>SM</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',borderRight:'grey',borderRightWidth:1}}>
                  <Text>UM</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text>FU</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
     )
     }
 }

 export default Card