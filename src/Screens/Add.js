import React, { Component } from "react";
import { View,
         Text,
         StyleSheet,
         TouchableOpacity
         } from "react-native";
import Form from '../Component/Form'
import Header from '../Component/Header'


const AddScreen = ({navigation}) => {
        return(
            <View style={styles.body}>
                <Header/>
                
                <Form navigation = {navigation}/>

            </View>
        )
}

const styles = StyleSheet.create({
    body:{
        flex:1
    }
})

export default AddScreen