import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'; 
import ReviewDetails from './screens/reviewDetails';
import Splash from './screens/Splash';
import Test from './screens/Test';
import Reviewform from './screens/reviewform';
import Contact from './screens/Contact';
import Home from './screens/home';
import Adduser from './screens/Adduser';

const App = ({navigation})=>{
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName = { "Splash" } screenOptions={{headerShown:false}}
             >
             <Stack.Screen name = "Splash" component={Splash}/>
              <Stack.Screen name={'Test'} component={Test}/>
              <Stack.Screen name={'reviewDetails'} component={ReviewDetails} />  
              <Stack.Screen name={'reviewform'} component={Reviewform} />  
              <Stack.Screen name={'Contact'} component={Contact} />  
              <Stack.Screen name={'home'} component={Home} />  

          </Stack.Navigator>
        </NavigationContainer>
    )
  }
  export default App