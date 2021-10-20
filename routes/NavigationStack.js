import React from "react"
import {createStackNavigator} from "react-navigation-stack" 
import {createAppContainer} from "react-navigation"
import Home from "../screens/Home" 
import NewsPage from "../screens/NewsPage";
import Login from "../screens/Login";
import GeolocationComponent from "../screens/GeolocationComponent"
const screens={
     Login:{
     screen:Login,
     navigationOptions:{         
     headerShown:false,    
    }
      },
    Home:{
     screen:Home,
     navigationOptions:{
         title:"Schedule",
         headerStyle:{backgroundColor:"white"}
     }
    },
    NewsPage:{
        screen:NewsPage
    },
    Geo:{
        screen:GeolocationComponent,
        headerShown:false
      }
    
    
}

const NavigationStack=createStackNavigator(screens)
export default createAppContainer(NavigationStack);


