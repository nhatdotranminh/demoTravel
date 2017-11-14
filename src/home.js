import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

deviceScreen = Dimensions.get("window");
export default class home extends Component {
  static navigationOptions = {
    tabBarlabel: "Home",
    drawerIcon: ({ tintColor }) => {
      return (
        <Icon
          name="home"
          color={"rgb(63, 89, 130)"}
          size={24}
          style={{ color: tintColor }}
        />
      );
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        source={require("../Asset/img/map.jpg")}
        style={styles.imageBackgroundStyle}
      >
        <View style={styles.gridContainer}>
          <TouchableOpacity onPress={() => navigate("Map")}>
            <View>
              <ImageBackground
                source={require("../Asset/img/map2.jpg")}
                style={styles.block}
              >
                <Icon style={styles.iconStyle} name="map-marker" size={60} />

                <Text style={styles.textStyle}>Near By</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate("TravelPlace")}>
            <View>
              <ImageBackground
                source={require("../Asset/img/brigde.jpg")}
                style={styles.block}
              >
                <Icon style={styles.iconStyle} name="map-signs" size={60} />

                <Text style={styles.textStyle}>Travel Place</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.gridContainer}>
          <TouchableOpacity onPress={() => navigate("HotDeal")}>
            <View>
              <ImageBackground
                source={require("../Asset/img/moutain.jpg")}
                style={styles.block}
              >
                <Icon style={styles.iconStyle} name="hand-peace-o" size={60} />

                <Text style={styles.textStyle}>Hot Deal</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <ImageBackground
            source={require("../Asset/img/map2.jpg")}
            style={styles.block}
          >
            <Icon style={styles.iconStyle} name="map-marker" size={60} />
            <Text style={styles.textStyle}>Near By</Text>
          </ImageBackground>
        </View>
        <View style={styles.gridContainer}>
          <ImageBackground
            source={require("../Asset/img/moutain.jpg")}
            style={styles.block}
          >
            <Icon style={styles.iconStyle} name="map-marker" size={60} />
            <Text style={styles.textStyle}>Hot Deal</Text>
          </ImageBackground>
          <ImageBackground
            source={require("../Asset/img/map2.jpg")}
            style={styles.block}
          >
            <Icon style={styles.iconStyle} name="map-marker" size={60} />
            <Text style={styles.textStyle}>Near By</Text>
          </ImageBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackgroundStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#F7F8E0",
    opacity: 0.3
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10
  },
  block: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    margin: 10,
    // paddingHorizontal: 10,
    width: deviceScreen.width / 2 - 25,
    height: deviceScreen.width / 2 - 25,
    borderRadius: 3
  },
  textStyle: {
    fontSize: 24,
    color: "#FFFFFF",
    backgroundColor: "transparent"
  },
  iconStyle: {
    backgroundColor: "transparent"
  }
});
