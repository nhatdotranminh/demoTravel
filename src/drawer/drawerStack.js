import React, { Component } from 'react';
import {DrawerNavigator } from "react-navigation";

import { View, Text, TouchableHighlight,StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import homeSrc from "../home";
import profileSrc from "../profile"
import Menu from "./menu"
import loveLocationSrc from "../loveLocation"


const drawerStack = DrawerNavigator(
  {
    Home: { screen: homeSrc },
    Profile:{screen:profileSrc},
    Liked:{screen:loveLocationSrc}
    
  },
  {
    initialRouteName: "Home",
    drawerPosition: "Left",
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "rgba(51, 102, 153, 0.7)",
        paddingLeft: 10,
        paddingRight: 10
      },
    //  title: "Home",
      headerTintColor: "white",
      headerLeft: (
        <View>
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("DrawerOpen");
            }}
          >
            <Icon size={24} style={styles.iconStyle} name="navicon" />
          </TouchableHighlight>
        </View>
      )
    }),
    contentOptions: {
      activeTintColor: 'green',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1
      }
    },
   // contentComponent:props=> <Menu{...props}/>
    
  }
);
const styles = StyleSheet.create({
  iconStyle: {
   
    margin: 3
  }
});
export default drawerStack;