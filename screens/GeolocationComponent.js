import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid,Text } from 'react-native';

async function requestLocationPermission() 
{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Example App',
        'message': 'Example App access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
      alert("You can use the location");
      return true
    } else {
      console.log("location permission denied")      
      alert("Location permission denied");
      return false
    }
  } catch (err) {
    console.warn(err)
    return false;
  }
}
class GeolocationComponent extends React.Component{
    state={
        currentLocation:false
    }
    async componentDidMount() {
       let hasLocationPermission= await requestLocationPermission();
        if (hasLocationPermission) {
          Geolocation.getCurrentPosition(
              (position) => {
                console.log("====Position===",position)
                this.setState({currentLocation:position},(state)=>{
                  console.log("===state==\n",state)
                })
              },
              (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
              },
              { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
          );
        }
      } 


    render(){
     return (<>
            <Text style={{color:"black"}}>Latitude:{this.state.currentLocation?this.state.currentLocation.coords.latitude:""}</Text>            
            <Text style={{color:"black"}}>Longitude :{this.state.currentLocation?this.state.currentLocation.coords.longitude:""}</Text>
            <Text style={{color:"black"}}>Speed :{this.state.currentLocation?this.state.currentLocation.coords.speed:""}</Text>
        
        </>)
    }


}


export default GeolocationComponent
