/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  View,
  TextInput,
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
    this.state = {
      email: "",
      password: ""
    };
  }

  onPressed(){
    fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(responseData => {
         responseData.id_token
      })
      .done();
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ImageBackground
          
          source={require("../Asset/img/map.jpg")}
          style={[styles.img]}
        >
          <TextInput
            style={styles.textInputStyle}
            placeholder="Email"
            // placeholderTextColor="black"
            value={this.state.email}
            onChangeText={value => this.setState({ email: value })}
          />
          <TextInput
            placeholder="Password"
            value={this.state.password}
            onChangeText={value => this.setState({ password: value })}
            secureTextEntry={true}
            style={styles.textInputStyle}
            // placeholderTextColor="black"
            autoCorrect={false}
            autoFocus={false}
          />
          <View style={{ width: 200 }}>
            <Button style={styles.btn} block success onPress={() => navigate("Home")}>
              <Text style={styles.textStyle}>Log In</Text>
            </Button>
          </View>
          <TouchableOpacity onPress={() => navigate("Forgot")}>
            <Text style={styles.textStyle}>Forgot password ?</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={styles.textStyle}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => navigate("Register")}>
              <Text style={styles.textStyle}> Register</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: "center"
    // backgroundColor: "#F5FCFF"
  },
  img: {
    width: deviceScreen.width,
    height: deviceScreen.height,
    //   resizeMode: "cover"
    justifyContent: "center",
    alignItems: "center"
  },
  // body: {
  //   flex: 9,
  //   // borderRadius: 10
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  footer: {
    width: deviceScreen.width,
    height: 30,

    //opacity: 0.78,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    margin: 15
  },
  textStyle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 18
  },
  textInputStyle: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: deviceScreen.width - 20,
    padding: 10,
    margin: 10
    //  backgroundColor: "white"
  },
  btn:{
    margin:15,
    backgroundColor:'rgb(43, 226, 104)'
  }
});
