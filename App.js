/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,  
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './animations/SpashScreen';
import Navigator from './routes/NavigationStack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


const App= () => {
    return (
    <>
      <Navigator />
    </>
  );
};


export default App;

