/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Animated,
  Button
} from "react-native";

deviceScreen = Dimensions.get("window");

export default class welcomeSrc extends Component {
  constructor() {
    super();
    this.animated = new Animated.Value(0);
    this.state = {
      timer: false
    };
  }
  setTimer() {
    this.setState({
      timer: true
    });
  }
  animate() {
    this.animated.setValue(0);
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 2000
    }).start();
   // this.setTimer();
  }
  componetWillMount() {
    console.log("this is will mount")
  }
  render() {
    const opacity = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });
    const translateX = this.animated.interpolate({
      inputRange: [0, 1],
      outputRange: [-500, 1]
    });
    const transform = [{ translateX }];
    const { navigate } = this.props.navigation;
    if (this.state.timer == true) {
      return navigate("Login");
    } else {
      return (
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <ImageBackground style={styles.img} source={require("../Welcome.png")}>
              <View style={styles.welcomeText}>
                <Animated.Text style={[styles.text, { opacity }]}>
                  Welcome
                </Animated.Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      );
    }
  }
  componentDidMount() {
    this.animate();
    setTimeout(()=>{
        this.setTimer()
    },3000)
    console.log("this is did mount")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#F5FCFF"
  },
  img: {
    width: deviceScreen.width,
    height: deviceScreen.height,
  //  resizeMode: "cover"
  },
  welcomeText: {
    marginTop: deviceScreen.height / 2 - deviceScreen.height / 8,
    marginBottom:
      deviceScreen.height / 2 +
      deviceScreen.height / 8 -
      deviceScreen.height / 100,
    marginLeft: deviceScreen.width - 92,
    marginRight: deviceScreen.width - 93,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontSize: 36,
    color: "white",
    ...Platform.select({
      ios: { fontFamily: 'Arial', }, 
      android: { fontFamily: 'Roboto' }
 })
  }
});
