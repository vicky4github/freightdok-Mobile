/**
 * @format
 * @flow strict-local
 */
import React from "react"
import {View,Text,SafeAreaView,ScrollView} from "react-native"
import { globalStyles } from "../global/globalStyles";
import {CardNine} from "react-native-card-ui"
const Home= ({navigation}) => {
     
    return (      
     <SafeAreaView >
     <ScrollView >
      <View style={globalStyles.container}>
          <CardNine
            title={"Crazy House"}
            subTitle={
              "Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod"
            }
            image={{
              uri:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
            price={33.5}
            onClicked={() => {
              navigation.navigate("Geo")
            }}
          />
           <CardNine
            title={"Crazy House"}
            subTitle={
              "Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod"
            }
            image={{
              uri:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />
           <CardNine
            title={"Crazy House"}
            subTitle={
              "Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod"
            }
            image={{
              uri:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />
           <CardNine
            title={"Crazy House"}
            subTitle={
              "Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod"
            }
            image={{
              uri:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />
           <CardNine
            title={"Crazy House"}
            subTitle={
              "Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod"
            }
            image={{
              uri:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />
           <CardNine
            title={"Crazy House"}
            subTitle={
              "Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod"
            }
            image={{
              uri:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />
           <CardNine
            title={"Crazy House"}
            subTitle={
              "Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod"
            }
            image={{
              uri:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />
           <CardNine
            title={"Crazy House"}
            subTitle={
              "Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod"
            }
            image={{
              uri:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />
           <CardNine
            title={"Crazy House"}
            subTitle={
              "Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod"
            }
            image={{
              uri:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />
           <CardNine
            title={"Crazy House"}
            subTitle={
              "Lorem ipsum dolor sit amet, consectetuer adipiscin elit, sed diam nonummy nibh euismod"
            }
            image={{
              uri:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            }}
            price={33.5}
            onClicked={() => {
              alert("Hello!");
            }}
          />                      
      </View>      
    </ScrollView>      
     </SafeAreaView >
    );
  };  
  
  export default Home;
  
  