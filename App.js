/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,  
  useColorScheme,
  ScrollView
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './animations/SplashScreen';
import Navigator from './routes/NavigationStack';
const App= () => {
    return (
    <>
    <LoadLoginPage/>
    </>
  );
};




const LoadLoginPage=()=>{
  const [renderLogin,setRenderLogin]=React.useState(false);

  React.useEffect(()=>{
   setTimeout(() => {
     setRenderLogin(true)
   }, 4000); 
  })
  return(<>
  {
    renderLogin?<Navigator/>: <SplashScreen/>
  }    
  </>)
}





export default App;

