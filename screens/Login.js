import React from 'react';
import {View,Text} from "react-native"
import DarkLoginScreen from "react-native-dark-login-screen";
import axios from "axios"


const Login=({navigation})=>{
const [email,setEmail]=React.useState(false);
const [password,setPassword]=React.useState(false);
return(<>
<DarkLoginScreen
    usernamePlaceholder="Email"
    titleText={"FreightDok"}
    googleButtonStyle={{display:"none"}}
    facebookButtonStyle={{display:"none"}}
    appleButtonStyle={{display:"none"}}
    usernameChangeText={(value)=>{
    setEmail(value)
    }}
    passwordChangeText={(value)=>{
      setPassword(value)
    }}

    handleSignInButton={()=>{
      // navigation.navigate("Home")
console.log("===Email===",email)

console.log("===Password===",password)


const body = JSON.stringify({ email, password });

try {
  const res = await axios.post('/api/auth', body, config);
     }
catch(err){
console.log("----Error----",err)
    }

    }}
    />
</>)

}

export default Login
