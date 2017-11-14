/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { View, TouchableHighlight, StyleSheet } from "react-native";

import welcomeSrc from "./src/welcome";
import loginSrc from "./src/login";
import startSrc from "./src/Start";
import testSrc from "./src/test";
import registerSrc from "./src/register";
import forgotSrc from "./src/forgotPassword";
import drawerStack from "./src/drawer/drawerStack";
import mapSrc from "./src/map";
import travelPlaceSrc from "./src/travelPlace";
import hotdealSrc from "./src/hotdeal";
import suggestSrc from "./src/suggest";
//
import Icon from "react-native-vector-icons/FontAwesome";
// platform select
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// Stack
const App = StackNavigator({
  Welcome: {
    screen: welcomeSrc,
    navigationOptions: {
      header: false
    }
  },
  Start: {
    screen: startSrc,
    navigationOptions: {
      header: false
    }
  },
  Login: {
    screen: loginSrc,
    navigationOptions: {
      header: false
    }
  },
  Register: {
    screen: registerSrc,
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
              navigation.goBack();
            }}
          >
            <Icon size={30} name="angle-left" />
          </TouchableHighlight>
        </View>
      )
    })
  },
  Forgot: {
    screen: forgotSrc,
    navigationOptions: {
      header: false
    }
  },
  Map: {
    screen: mapSrc,
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
              navigation.goBack();
            }}
          >
            <Icon size={30} name="angle-left" />
          </TouchableHighlight>
        </View>
      )
    })
  },
  TravelPlace: {
    screen: travelPlaceSrc,
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
              navigation.goBack();
            }}
          >
            <Icon size={30} name="angle-left" />
          </TouchableHighlight>
        </View>
      )
    })
  },
  HotDeal: {
    screen: hotdealSrc,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "rgb(51, 102, 153)",
        paddingLeft: 10,
        paddingRight: 10
      },
      //  title: "Home",
      headerTintColor: "white",
      headerLeft: (
        <View>
          <TouchableHighlight
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon size={24} name="angle-left" />
          </TouchableHighlight>
        </View>
      )
    })
  },
  Suggest: {
    screen: suggestSrc,
    navigationOptions: {
      header: false
    }
  },
  Drawer: {
    screen: drawerStack
  }
});

//make this component available to the app
export default App;
