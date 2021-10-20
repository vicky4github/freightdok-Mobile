import React, {Component} from 'react';
import LottieView from 'lottie-react-native';
import {View, StyleSheet} from 'react-native';

// import AppTheme from './../common/Theme';

export default class SplashScreen extends Component {
//   async componentDidMount() {
//     // You can load api data or any other thing here if you want
//     const data = await this.navigateToHome();
//     if (data !== null) {
//       this.props.navigation.navigate('SignUpScreen');
//     }
//   }
//   navigateToHome = async () => {
//     // Splash screen will remain visible for 2 seconds
//     const wait = time => new Promise(resolve => setTimeout(resolve, time));
//     return wait(2000).then(() =>
//       this.props.navigation.navigate('SignUpScreen'),
//     );
//   };

  render() {
    return (
      <View style={styles.lottieView}>
        <LottieView source={require('../animations/lotties/truck.json')} autoPlay loop />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lottieView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white'//AppTheme.MAIN_THEME,
  },
});