/**
 * @format
 * @flow strict-local
 */
import React from "react"
import {View,Text} from "react-native"
import { globalStyles } from "../global/globalStyles";
const Home= () => {
     
    return (
      <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
    );
  };  
  
  export default Home;
  
  