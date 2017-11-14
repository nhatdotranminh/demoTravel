import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
deviceScreen = Dimensions.get("window");
export default class forgotPassword extends Component {
  static navigationOptions = {
    tabBarlabel: "Liked",
    drawerIcon: ({ tintColor }) => {
      return (
        <Icon
          name="heart"
          color={"red"}
          size={24}
          style={{ color: tintColor }}
        />
      );
    }
  };
  render() {
    return (
      
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ScrollView>
          <TouchableOpacity>
            <View style={styles.formStyle}>
              <View style={styles.imgBlock}>
                <Image
                  style={styles.imgStyle}
                  source={require("../Asset/img/vungtau.jpg")}
                />
                <Text style={styles.nameStyle}>Vũng Tàu</Text>
              </View>
              <View style={styles.rateStyle}>
                <Icon name="heart" color={"red"} />
                <Text style={{ fontFamily: "fontAweSome", marginLeft: 15 }}>
                  4014 lượt đánh giá
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.formStyle}>
              <View style={styles.imgBlock}>
                <Image
                  style={styles.imgStyle}
                  source={require("../Asset/img/dalat3.jpg")}
                />
                <Text style={styles.nameStyle}>Đà Lạt</Text>
              </View>
              <View style={styles.rateStyle}>
                <Icon name="heart" color={"red"} />
                <Text style={{ fontFamily: "fontAweSome", marginLeft: 15 }}>
                  3000 lượt đánh giá
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  formStyle: {
    backgroundColor: "#FFFFFF",
    height: 200,
    width: deviceScreen.width,
    marginTop: 10
  },
  imgBlock: {
    flex: 1.7
  },
  rateStyle: {
    flex: 0.3,
    flexDirection: "row",
    margin: 10,
    alignItems: "center"
  },
  imgStyle: {
    width: deviceScreen.width,
    height: 120
    //   resizeMode:'contain'
  },
  nameStyle: {
    fontFamily: "fontAweSome",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10
  }
});
