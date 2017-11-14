import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class profile extends Component {
  static navigationOptions = {
    tabBarlabel: "You",
    drawerIcon: ({ tintColor }) => {
      return <Icon name="user-circle" size={24} style={{ color: tintColor }} />;
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      birthDay: "",
      phoneNumber: "",
      address: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Text style={styles.textStyle}>USER NAME</Text>
          <Text style={{ color: "white", fontFamily: "FontAwesome" }}>
            nhatdo@gmail.com
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.block}>
            <Text style={styles.infoTextStyle}>Full Name: </Text>
            <Text>{this.state.fullName}</Text>
          </View>

          <View style={styles.block}>
            <Text style={styles.infoTextStyle}>Birth Day: </Text>
            <Text>{this.state.birthDay}</Text>
          </View>

          <View style={styles.block}>
            <Text style={styles.infoTextStyle}>Phone: </Text>
            <Text>{this.state.phoneNumber}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.infoTextStyle}>Address: </Text>
            <Text>{this.state.address}</Text>
          </View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  imgContainer: {
    flex: 4,
    backgroundColor: "green",
    borderBottomWidth: 3,
    // marginVertical: 30,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 24,
    margin: 5,
    fontFamily: "FontAweSome",
    color: "white"
  },
  infoContainer: {
    flex: 6,
    backgroundColor: "#FAF7F7"
  },
  block: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row"
  },
  infoTextStyle: {
    fontSize: 16,
    fontWeight: "400",
    margin: 5,
    fontFamily: "FontAweSome",
    color: "black"
  }
});
