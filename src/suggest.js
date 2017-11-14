import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Swiper from "react-native-swiper";
import StarRating from "react-native-star-rating";
import Icon from "react-native-vector-icons/FontAwesome";
import IconEntypo from "react-native-vector-icons/Entypo";
import { Button } from "native-base";

var deviceScreen = Dimensions.get("window");
export default class suggest extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      starCount: 3.5,
      heart: "heart-outlined"
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  onHeartRating() {
    if (this.state.heart == "heart-outlined") {
      this.setState({
        heart: "heart"
      });
    }
    if (this.state.heart == "heart") {
      this.setState({
        heart: "heart-outlined"
      });
    }
  }

  componentWillMount() {
    fetch("http://localhost:3000/api/locationinfo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.props.navigation.state.params.location
      })
    })
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          image1: responseData.image1,
          image2: responseData.image2,
          image3: responseData.image3,
          image4: responseData.image4,
          location: responseData.details
        });
        //alert(this.state.location);
      })
      .done();
  }

  render() {
    const { state } = this.props.navigation;
    const { navigate } = this.props.navigation;
    if (this.props.navigation.state.params.location == "vungtau") {
      return (
        <View
          style={{
            backgroundColor: "#FAF7F7",
            flex: 1
          }}
        >
          <View style={{ flex: 3 }}>
            <Swiper style={styles.wrapper} autoplay={true} showsButtons={false}>
              <ImageBackground
                style={styles.slide1}
                source={require("../Asset/img/vungtau3.png")}
              >
                <Text style={styles.text}>{this.state.location}</Text>
              </ImageBackground>

              <View style={styles.slide2}>
                <Image
                  style={{ resizeMode: "cover" }}
                  source={require("../Asset/img/vungtau.jpg")}
                />
              </View>
              <View style={styles.slide3}>
                <Image
                  style={{ resizeMode: "cover" }}
                  source={require("../Asset/img/vungtau2.jpg")}
                />
              </View>
            </Swiper>
          </View>
          <View style={{ flex: 7, backgroundColor: "#FAF7F7" }}>
            <View
              style={{
                flex: 0.5,
                justifyContent: "flex-end"
              }}
            >
              <View style={{ flexDirection: "row", flex: 0.5 }}>
                <StarRating
                  disabled={false}
                  emptyStar={"ios-star-outline"}
                  fullStar={"ios-star"}
                  halfStar={"ios-star-half"}
                  iconSet={"Ionicons"}
                  starSize={30}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  starColor={"rgba(230, 230, 0,0.7)"}
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <TouchableOpacity onPress={() => this.onHeartRating()}>
                  <IconEntypo
                    style={{ margin: 5 }}
                    color={"red"}
                    name={this.state.heart}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 2 }}>
              <ScrollView>
                <View style={styles.formStyle}>
                  <Text style={{ fontFamily: "fontAweSome", fontSize: 14 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Mô tả:{" "}
                    </Text>
                    <Text numberOfLines={5}>
                      Vũng Tàu từ lâu đã được xem là một điểm đến du lịch hấp
                      dẫn, bởi những vẻ đẹp tự nhiên của mình. Dù đến bất cứ đâu
                      trong chuyến du lịch Vũng Tàu, du khách cũng sẽ bị cuốn
                      hút bởi phong cảnh của nơi đây.
                    </Text>
                  </Text>
                </View>
                <View style={styles.formStyle}>
                  <Text style={styles.textTitleBase}>
                    <Text style={styles.textTitle}>Phương Tiện: </Text>
                  </Text>
                  <Icon
                    style={{ marginRight: 5 }}
                    name="motorcycle"
                    size={24}
                  />
                  <Icon style={{ marginRight: 5 }} name="plane" size={24} />
                  <Icon style={{ marginRight: 5 }} name="car" size={24} />
                </View>
                <View style={styles.formStyle}>
                  <Text style={styles.textTitleBase}>
                    <Text style={styles.textTitle}>Dịch vụ: </Text>
                  </Text>
                  <TouchableOpacity
                    onPress={() => alert("Chi tiết tạm thơi chưa xem được")}
                  >
                    <Icon
                      style={{ marginRight: 10 }}
                      name="cutlery"
                      size={24}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => alert("Chi tiết tạm thơi chưa xem được")}
                  >
                    <Icon style={{ marginRight: 10 }} name="coffee" size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => alert("Chi tiết tạm thơi chưa xem được")}
                  >
                    <Icon style={{ marginRight: 10 }} name="hotel" size={24} />
                  </TouchableOpacity>
                </View>
                <Button
                  block
                  light
                  iconLeft
                  style={styles.btn}
                  onPress={() => navigate("Home")}
                >
                  <Icon size={24} style={styles.iconStyle} name="home" />
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 14,
                      fontWeight: "bold"
                    }}
                  >
                    Home
                  </Text>
                </Button>
              </ScrollView>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View
          style={{
            backgroundColor: "#FAF7F7",
            flex: 1
          }}
        >
          <View style={{ flex: 3 }}>
            <Swiper style={styles.wrapper} autoplay={true} showsButtons={false}>
              <ImageBackground
                style={styles.slide1}
                source={require("../Asset/img/dalat3.jpg")}
              >
                <Text style={styles.text}>{this.state.location}</Text>
              </ImageBackground>

              <View style={styles.slide2}>
                <Image
                  style={{ resizeMode: "cover" }}
                  source={require("../Asset/img/dalat.jpg")}
                />
              </View>
              <View style={styles.slide3}>
                <Image
                  style={{ resizeMode: "cover" }}
                  source={require("../Asset/img/dalat2.jpg")}
                />
              </View>
            </Swiper>
          </View>
          <View style={{ flex: 7, backgroundColor: "#FAF7F7" }}>
            <View
              style={{
                flex: 0.5,
                justifyContent: "flex-end"
              }}
            >
              <View style={{ flexDirection: "row", flex: 0.5 }}>
                <StarRating
                  disabled={false}
                  emptyStar={"ios-star-outline"}
                  fullStar={"ios-star"}
                  halfStar={"ios-star-half"}
                  iconSet={"Ionicons"}
                  starSize={30}
                  maxStars={5}
                  rating={this.state.starCount}
                  selectedStar={rating => this.onStarRatingPress(rating)}
                  starColor={"rgba(230, 230, 0,0.7)"}
                />
              </View>
              <View style={{ flex: 0.5 }}>
                <TouchableOpacity onPress={() => this.onHeartRating()}>
                  <IconEntypo
                    style={{ margin: 5 }}
                    color={"red"}
                    name={this.state.heart}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 2 }}>
              <ScrollView>
                <View style={styles.formStyle}>
                  <Text style={{ fontFamily: "fontAweSome", fontSize: 14 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      Mô tả:{" "}
                    </Text>
                    <Text numberOfLines={5}>
                      Đà Lạt là thủ phủ của tỉnh Lâm Đồng. Với độ cao 1.500 m
                      trên mặt nước biển, Đà Lạt tiết trời mát lạnh và là nơi
                      nghỉ dưỡng lý tưởng ở khu vực miền Nam.
                    </Text>
                  </Text>
                </View>
                <View style={styles.formStyle}>
                  <Text style={styles.textTitleBase}>
                    <Text style={styles.textTitle}>Phương Tiện: </Text>
                  </Text>
                  <Icon
                    style={{ marginRight: 5 }}
                    name="motorcycle"
                    size={24}
                  />
                  <Icon style={{ marginRight: 5 }} name="plane" size={24} />
                  <Icon style={{ marginRight: 5 }} name="car" size={24} />
                </View>
                <View style={styles.formStyle}>
                  <Text style={styles.textTitleBase}>
                    <Text style={styles.textTitle}>Dịch vụ: </Text>
                  </Text>
                  <TouchableOpacity
                    onPress={() => alert("Chi tiết tạm thơi chưa xem được")}
                  >
                    <Icon
                      style={{ marginRight: 10 }}
                      name="cutlery"
                      size={24}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => alert("Chi tiết tạm thơi chưa xem được")}
                  >
                    <Icon style={{ marginRight: 10 }} name="coffee" size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => alert("Chi tiết tạm thơi chưa xem được")}
                  >
                    <Icon style={{ marginRight: 10 }} name="hotel" size={24} />
                  </TouchableOpacity>
                </View>
                <Button
                  block
                  light
                  iconLeft
                  style={styles.btn}
                  onPress={() => navigate("Home")}
                >
                  <Icon size={24} style={styles.iconStyle} name="home" />
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 14,
                      fontWeight: "bold"
                    }}
                  >
                    Home
                  </Text>
                </Button>
              </ScrollView>
            </View>
          </View>
        </View>
      );
    }
  }
}

var styles = StyleSheet.create({
  wrapper: {
    height: 300
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    backgroundColor: "transparent"
  },
  btn: {
    margin: 15,
    backgroundColor: "rgb(43, 226, 104)"
  },
  formStyle: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 30,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row"
  },
  textTitleBase: {
    fontFamily: "fontAweSome",
    fontSize: 14
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 16
  },
  iconStyle: {
    marginRight: 10,
    alignSelf: "center"
  }
});
