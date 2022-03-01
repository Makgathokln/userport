import React from 'react';
import { StyleSheet,Button,TextInput,View,Text,TouchableOpacity } from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup'

const Reviewform = ({addReview}) => {
    const ReviewSchem = yup.object({
        name:yup.string().required().min(3),
        location:yup.string().required().min(3),
        gender:yup.string().required().test('is-num-1-100','gender must be Female/Male',
        (val)=>{
            return val == 'Female' || val == 'Male';
        }
        ),
        surname:yup.string().required().min(4),
        Age:yup.string().required().test('is-num-1-100','Age must be number 1- 100',
        (val)=>{
            return parseInt(val) < 101 && parseInt(val) > 0;
        }
        )
    })
    
    return (
        <>
        <View style={styles.header} >
        <Text style={{color:'#fff', fontSize:26, fontWeight:'bold',marginTop:30}}>Registration</Text>

        </View>
           <View style={{flex:1,  
                        
                        justifyContent: 'center', paddingHorizontal:20}}>
               <Formik 
               initialValues={{name:'',surname:'',Age:'',location:'',gender:''}}
               validationSchema={ReviewSchem}
               onSubmit={(values,action)=>{
                   action.resetForm()
                addReview(values)
               }}
               >

                   {(props)=>(
                       <View >
                        
                        <Text style={{color:'#3385ff', fontSize:18, fontWeight:'bold'}}>Name</Text>

                           <TextInput 
                        className="textinput"

                           style={styles.input}
                           placeholder='Mary '
                           onChangeText={props.handleChange('name')}
                           value={props.values.name}
                           onBlur={props.handleBlur('name')}


                           />
                           <Text>{props.touched.name && props.errors.name}</Text>
                           <Text style={{color:'#3385ff', fontSize:18, fontWeight:'bold'}}>Surname</Text>

                            <TextInput 
                            className="textinput"

                           style={styles.input}
                           placeholder='Smith'
                           onChangeText={props.handleChange('surname')}
                           value={props.values.surname}
                           onBlur={props.handleBlur('surname')}
                           />
                           <Text>{props.touched.surname && props.errors.surname}</Text>
                           <Text style={{color:'#3385ff', fontSize:18, fontWeight:'bold'}}>Age</Text>

                            <TextInput 
                             className="textinput"

                            type='number'
                           style={styles.input}
                           placeholder='29 Years'
                           onChangeText={props.handleChange('Age')}
                           value={props.values.Age}
                           keyboardType='numeric'
                           onBlur={props.handleBlur('Age')}
                           />
                           <Text>{props.touched.Age && props.errors.Age}</Text>
                           
                           <Text style={{color:'#3385ff', fontSize:18, fontWeight:'bold'}}>Location</Text>

                            <TextInput 
                            className="textinput"

                            multiline
                           style={styles.input}
                           placeholder='Polokwane'
                           onChangeText={props.handleChange('location')}
                           value={props.values.location}
                           onBlur={props.handleBlur('location')}
                           />
                           <Text style={{fontWeight:'bold',fontSize:20, color:'orange'}}>{props.touched.location && props.errors.location}</Text>
                           <Text style={{color:'#3385ff', fontSize:18, fontWeight:'bold'}}>Gender</Text>

                            <TextInput 
                           style={styles.input}
                           placeholder='User Gender'
                           onChangeText={props.handleChange('gender')}
                           value={props.values.gender}
                           onBlur={props.handleBlur('gender')}
                           />
                           <Text>{props.touched.gender && props.errors.gender}</Text>
{/*                           
                           <TouchableOpacity
                 style={{
                    backgroundColor:'#6ee6e7',width:'65%',
                    height:'9%',borderRadius:50, justifyContent: 'center',
                alignItems:'center',  marginLeft:60}}
                onPress={props.handleSubmit}>
                <Text style={{padding:5,color:'#fff',fontSize: 22,fontWeight:'bold'}}>
                    Add
                </Text>
            </TouchableOpacity> */}
                          
                          <Button title='Add User' color='orange' onPress={props.handleSubmit}/>

                       </View>
                   )}
                    
                   </Formik>
                   {/*  */}
               
               </View> 
        </>
    )
}
const styles =StyleSheet.create({
    container:{
        padding:24
    },
    header: {
        width: '100%',
        height: '20%',
        paddingVertical: 30,
        alignItems: 'center',
        backgroundColor: '#6ee6e7',
        borderBottomRightRadius: 60,
      },
    input:{
        borderWidth:2,
        borderColor:'#3385ff',
        paddingHorizontal:20,
        width:'95%',
        height:'9%',
        
        fontSize:18,
        borderRadius:6,
    },
    textinput:{
    width:5,
    }
    
})

export default Reviewform
