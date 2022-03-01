import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import ReviewDetails from "../screens/reviewDetails";
import About from "../screens/about";
import Adduser from "../screens/Adduser";
import Contact from "../screens/Contact";

const screens ={
    Home:{
        screen:Home,
        navigationOptions:{
            
            title:'User List',
        }
    },
    ReviewDetails:{
        screen:ReviewDetails,
        navigationOptions:{
            title:'Display User information'
        }
    },
    Adduser:{
        screen:Adduser,
        navigationOptions:{
            title:'Create User'
        }
    },
    About:{
        screen:About,
        navigationOptions:{
            title:'My Resume'
        }
    },
    Contact:{
        screen:Contact,
        navigationOptions:{
            title:'My Contacts'
        }
    },
    
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);