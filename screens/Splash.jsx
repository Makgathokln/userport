import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native";
import LottieView from "lottie-react-native";

const Splash = ({navigation}) => {

  setTimeout(()=>{
    navigation.replace('reviewform');
},4000);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      
      <Text style={{fontSize:28,fontWeight:'bold', color:'#3385ff', textAlign:'center', marginBottom:20}}>Leah Makgatho</Text>
      <Text style={{fontSize:28,fontWeight:'bold', color:'#6ee6e7', textAlign:'center', marginBottom:20}}>Leah Makgatho</Text>
      <Text style={{fontSize:28,fontWeight:'bold', color:'#ffce33', textAlign:'center', marginBottom:20}}>Leah Makgatho</Text>

      <LottieView
        source={require("../splash.json")}
        style={{
          width: 400,
          height: 400,
          backgroundColor: "#ffce33",
          alignContent: "center",
        }}
        loop={true}
        autoPlay={true}
       
      />

      {/* <Text>Splash</Text> */}
    </View>
  );
};

export default Splash;
