import React,{useState} from 'react'
import { StyleSheet,View,Text, FlatList,TouchableOpacity ,SafeAreaView,Modal,
    LayoutAnimation, 
    ScrollView} from 'react-native';
import { Header,Button } from 'react-native-elements';
import Reviewform from './reviewform';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SwipeableFlatList,
  SwipeableQuickActions,
  SwipeableQuickActionButton,
} from 'react-native-swipe-list';
import { ListItem } from 'react-native-elements';
import { Tab } from 'react-native-elements';

export default function Home({navigation}){
    const [modalOpen,setModalOpen]=useState(false)
    const [reviews,setReviews]=useState([])
    // {name:'molobe',Age:3,surname:'the dancing side',
    //     location:'motinti',gender:'female',
    //     key:'1'},
    //     {name:'koketso',Age:2,surname:'the playing side',
    //     location:'tambo',gender:'male',key:'2',

    //     }
    
const addReview =(review)=>{
    review.key=Math.random().toString()
    setReviews((currentReviews)=>{
        return[review,...currentReviews]

    })
}
// const [isRender,setisRender]=useState(false)
// const [isModalVisible,setisModalVisible] =useState(false)
// const [inpuText,setinputText]=useState();
// const [editItem,seteditItem]= useState();

// const onPressItem=(item)=>{
//     setisModalVisible(true);
//     setinputText(item.text)
//     seteditItem(item.key)
// }

const renderItem =(item,index)=>{
return(
    <TouchableOpacity style={styles.item}onPress={()=> navigation.navigate('home',item)}>
                      <Text style={styles.text}>{item.name}  </Text>
                  </TouchableOpacity>
)
}

const onPressSaveEdit =()=>{

}
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
           <ScrollView>
            <Reviewform addReview={addReview}/>
        <View style={styles.container}> 
        {/* <FlatList 
              data={reviews}
              keyExtractor={(item)=>item.key.toString()}
              renderItem={renderItem}
              extraData={isRender}
              /> */}
        {/* <Modal visible={modalOpen} animationType='slide'>
            <View style={styles.modalContent}>
            <Button  title={"close"}onPress={()=>setModalOpen(false)}/>
            <Text>
               hello from the  modal
            </Text>
            </View>
            </Modal> */}
            {/*  <FlatList 
              data={reviews}
              renderItem={({item})=>(<SafeAreaView>
                  <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)}>
                      <Text>{item.name}  {item.surname}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>setReviews(reviews.filter(itemm => itemm.key != item.key))}>
                  <Icon name="delete" size={30} color='red' />
                  </TouchableOpacity> 
                  </SafeAreaView>
              )}
              /> */}
        {reviews.length?(
            <SafeAreaView>
            <SwipeableFlatList
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{padding:20,paddingBottom:100}}
            keyExtractor={(item)=>item.key.toString()}
            data={reviews}
            renderItem={({item})=>(
                <View style={styles.listItem} >
                    
                    <Text style={{paddingTop:3}}>Swipe to the left to delete</Text>
                
        <Text style={{fontWeight:'bold',fontSize:20}}>Name: {item.name}  Surname: {item.surname}</Text>
                <Button   style={{width:'100%',}} title={"View User"}onPress={()=>navigation.navigate('ReviewDetails',item)}/>
                {/* <Button  style={{size:20}}title={"edit"} onPress={()=>onPressItem(item)}></Button> */}
                
                </View>
                //
            // <SafeAreaView>
            //       <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)}>
            //           <Text>{item.name}  {item.surname}</Text>
            //       </TouchableOpacity>
                  
            //       </SafeAreaView>
            )}
            // extraData={isRender}
            
                renderLeftActions={({item}) => (
                    <SwipeableQuickActions>
                     <SwipeableQuickActionButton
                     onPress={() => { setReviews(reviews.filter(itemm => itemm.key != item.key))
       
                       LayoutAnimation.configureNext(
                         LayoutAnimation.Presets.easeInEaseOut,
                       );
                     }}
                     
                //   <Icon name="delete" size={30} color='red' />
                  
                     text="Delete"
                     textStyle={{fontWeight: 'bold', color: 'red'}}
                     />
                     {/* <TouchableOpacity onPress={()=>setReviews(reviews.filter(itemm => itemm.key != item.key))}>
                  <Icon name="delete" size={30} color='red' />
                  </TouchableOpacity>  */}
                     
                    
                     
                   </SwipeableQuickActions>)}
            /> 
            {/* <Modal
            animationType='fade'
            visible={isModalVisible}
            onRequestClose={()=>setisModalVisible(false)}
            >
                <View style={styles.modalView}>
                <Text style={styles.text}>Change Text:</Text>
                <TextInput
                style={styles.textInput}
                onChangeText={(text)=>setinputText(text)}
               defaultValue={inpuText} 
               editable={true}
               multiline={false}
               maxLength={200}/>
               <TouchableOpacity 
               onPress={()=>onPressSaveEdit()}
               style={styles.touchableSave}
               >
                   <Text>Save</Text>
               </TouchableOpacity>
                </View>
                  
            </Modal> */}
            </SafeAreaView>
        ):(
            <Text h3 style={{fontWeight:'bold',fontSize:30,}}>User list is empty</Text>
        )}
              

           
        </View>
        </ScrollView>
        <Header style={{backgroundColor:'orange'}}>

        
        <Button  title={"+ User"}onPress={()=>navigation.navigate('home')}/>
         
        <Button title={"About"}onPress={()=>navigation.navigate('About')}/>
        <Button title={"Contact"}onPress={()=>navigation.navigate('Contact')}/>
    
    </Header>
    
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    container:{
        padding:24
    },
    modalContent: {
        width:'100%'
    },listItem:{
        padding:20,
        // flexDirection:'row',
        elevation:12,
        borderRadius:7,
        width:300,
        alignItems:'flex-start',
        justifyContent:'flex-start'
        // marginVertical:10,
      },
      textInput:{
          width:'90%',
          height:70,
          borderColor:'blue',
          borderWidth:1,
          fontSize:25
      },
      modalView:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
      touchableSave:{
          backgroundColor:'blue',
          paddingHorizontal:100,
          alignItems:'center',
          marginTop:20
      },
      headerStyle: {
        backgroundColor: '#833471', 
        // use your preferred color code
     }
      
})
