import React from "react"
import {createStackNavigator} from "react-navigation-stack" 
import {createAppContainer} from "react-navigation"
import Home from "../screens/Home" 
import NewsPage from "../screens/NewsPage"
const screens={
    NewsPage:{
        screen:NewsPage
    },
    Home:{
        screen:Home
    },
    
}

const NavigationStack=createStackNavigator(screens)
export default createAppContainer(NavigationStack);


