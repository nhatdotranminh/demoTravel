/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  View,
  
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet
} from "react-native";

import { Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";


deviceScreen = Dimensions.get("window");

export default class loginSrc extends Component {
  constructor() {
    super();
  }

  componetWillMount() {}
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../Asset/img/map.jpg")} style={styles.img}>
          <View style={styles.container}>
            <Button block info style={styles.btn} onPress={()=> navigate('Start')}>
              <Text style={styles.textStyle}>Đăng nhập</Text>
            </Button>
            <Button block iconLeft style={styles.btn}>
              <Icon size={24} style={styles.iconStyle} name="google" />
              <Text style={styles.textStyle}>Google</Text>
            </Button>
            <Button block iconLeft style={styles.btn}>
              <Icon size={24} style={styles.iconStyle} name="facebook" />
              <Text style={styles.textStyle}>Facebook</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
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
    height: deviceScreen.height
    //   resizeMode: "cover"
  },
  btn:{
    margin: 15
  },
  textStyle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 18
  },
  iconStyle:{
    
    margin: 3
  }
});
