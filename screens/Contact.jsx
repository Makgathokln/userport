import React from 'react';
import { StyleSheet,View,Text,Image,SafeAreaView, Button, TextInput} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Contact = () => {
    return (
        <>
        <View style={{margin:20,marginTop:50}}>
            <Text h1 style={{color:'gray'}}> How to contact me I will respond to your email within 24 hours </Text>
            <TextInput placeholder="Enter Name" 
          style={{borderWidth:2, borderColor: 'orange', margin: 20}}/>
 <TextInput placeholder="Enter Contact" 
          style={{borderWidth:2, borderColor: 'orange', margin: 20}}/>
 <TextInput placeholder="Enter Email Address" 
          style={{borderWidth:2, borderColor: 'orange', margin: 20}}/>
 <TextInput placeholder="Enter Message" 
          style={{borderWidth:2, borderColor: 'orange', margin: 20}}/>
<Button color='orange' title="Send Message"/>
        </View>
<Text h2 style={{margin: 20, color:'gray'}}>Below are my social media handles</Text>
        <View style={{width:40, margin: 20}}>
        <FontAwesome.Button name="facebook" backgroundColor="orange">
      </FontAwesome.Button>
      </View>

        <View style={{width:40,marginTop:20,margin: 20}}>
        <FontAwesome.Button name="linkedin" backgroundColor="orange">
      </FontAwesome.Button>
        </View>

        <View style={{width:40, marginTop:20, margin: 20}}>
        <FontAwesome.Button name="twitter" backgroundColor="orange">
      </FontAwesome.Button>
        </View>
        </>
    )
}

export default Contact
