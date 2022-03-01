import React from 'react'
import { StyleSheet,View,Text,Button } from 'react-native';


export default function ReviewDetails({route,navigation}){

    // const {itemID}=route.params
    // const id =parseInt(itemID)
    
    return(
        <View style={styles.container}>
            
            <Text style={{fontWeight:'bold',fontSize:20, color:'orange'}}>Name</Text>
            <Text style={{fontSize:20, color:'gray'}}> 
            {navigation.getParam('name')}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:20, color:'orange',paddingLeft: 10}}>Age</Text>
            <Text style={{fontSize:20, color:'gray'}}>
            {navigation.getParam('Age')}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:20, color:'orange'}}>Surname</Text>
            <Text style={{fontSize:20, color:'gray'}}>
            {navigation.getParam('surname')}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:20, color:'orange'}}>Location</Text>
            <Text style={{fontSize:20, color:'gray'}}>
            {navigation.getParam('location')}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:20, color:'orange'}}>Gender</Text>
            <Text style={{fontSize:20,color:'gray'}}>
            {navigation.getParam('gender')}
            </Text>
            
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        borderRadius:7,
        marginVertical:10,
paddingLeft: 15,   
width:250,
marginTop: 50,
marginLeft:50     
        // flexDirection:'row'
        
            
    }
})
