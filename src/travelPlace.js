import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

// class
export default class travelPlace extends Component {
  constructor() {
    super();
    this.state = {
      diadiem: "",
      types1: [
        { label: "Ít ít đủ đi phượt gần", value: "1000000" },
        { label: "Khá dư dả", value: "2000000" },
        {
          label: "Tiền nong không thành vấn đề",
          value: "5000000"
        }
      ],
      value1: 0,
      value1Index: 0,
      types2: [
        { label: "Thời gian rảnh", value: "Thoigianranh" },
        { label: "Thời gian nghỉ lễ", value: "Thoigiannghile" },
        { label: "Cả 2", value: "ca2" }
      ],
      value2: 0,
      value2Index: 0,
      types3: [
        { label: "Xe máy", value: "xemay" },
        { label: "Ô Tô ", value: "oto" },
        { label: "Máy bay", value: "maybay" },
        { label: "Tàu lửa", value: "tauhoa" }
      ],
      value3: 0,
      value3Index: 0,
      types4: [
        { label: "Bạn bè", value: "nguoithanvabanbe" },
        { label: "Alone ", value: "motminh" },
        { label: "Người Yêu", value: "nguoiyeu" }
      ],
      value4: 0,
      value4Index: 0,
      types5: [
        { label: "Miền núi(Tây Nguyên...)", value: "miennui" },
        { label: "Về với biển xanh ", value: "baibienyeuthich" },
        { label: "Tìm hiểu lịch sử", value: "ditichlichsu" }
      ],
      value5: 0,
      value5Index: 0
    };
  }
  onPressedKq() {
    fetch("http://localhost:3000/api/treeid3", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chiphi: this.state.types1[this.state.value1Index].value,
        thoigian: this.state.types2[this.state.value2Index].value,
        phuongtien: this.state.types3[this.state.value3Index].value,
        who: this.state.types4[this.state.value4Index].value,
        diadiem: this.state.types5[this.state.value5Index].value,
      
      })
    })
      .then(response => response.json())
      .then(responseData => {
        this.props.navigation.navigate("Suggest", {
          location: responseData.status
        });
      })
      .done();
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.component}>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.welcome}>
                Bạn có thể chi trả bao nhiêu cho một chuyến du lịch?
              </Text>
            </View>
            <RadioForm
              formHorizontal={false}
              labelHorizontal={true}
              animation={true}
            >
              {this.state.types1.map((obj, i) => {
                var onPress = (value, index) => {
                  this.setState({
                    value1: value,
                    value1Index: index
                  });
                };
                return (
                  <RadioButton labelHorizontal={true} key={i}>
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={this.state.value1Index === i}
                      onPress={onPress}
                      buttonInnerColor={"#f39c12"}
                      buttonOuterColor={
                        this.state.value1Index === i ? "#2196f3" : "#000"
                      }
                      buttonSize={15}
                      buttonStyle={{}}
                      buttonWrapStyle={styles.btnWrapStyle}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      onPress={onPress}
                      labelStyle={styles.labelStyle}
                      labelWrapStyle={styles.labelWarpStyle}
                    />
                  </RadioButton>
                );
              })}
            </RadioForm>
          </View>

          <View style={styles.component}>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.welcome}>Bạn thường đi du lịch khi nào?</Text>
            </View>
            <RadioForm
              formHorizontal={false}
              labelHorizontal={true}
              animation={true}
            >
              {this.state.types2.map((obj, i) => {
                var onPress = (value, index) => {
                  this.setState({
                    value2: value,
                    value2Index: index
                  });
                };
                return (
                  <RadioButton labelHorizontal={true} key={i}>
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={this.state.value2Index === i}
                      onPress={onPress}
                      buttonInnerColor={"#f39c12"}
                      buttonOuterColor={
                        this.state.value2Index === i ? "#2196f3" : "#000"
                      }
                      buttonSize={15}
                      buttonStyle={{}}
                      buttonWrapStyle={styles.btnWrapStyle}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      onPress={onPress}
                      labelStyle={styles.labelStyle}
                      labelWrapStyle={styles.labelWarpStyle}
                    />
                  </RadioButton>
                );
              })}
            </RadioForm>
          </View>

          <View style={styles.component}>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.welcome}>
                Bạn thích đi du lịch bằng phương tiện nào?
              </Text>
            </View>
            <RadioForm
              formHorizontal={false}
              labelHorizontal={true}
              animation={true}
            >
              {this.state.types3.map((obj, i) => {
                var onPress = (value, index) => {
                  this.setState({
                    value3: value,
                    value3Index: index
                  });
                };
                return (
                  <RadioButton labelHorizontal={true} key={i}>
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={this.state.value3Index === i}
                      onPress={onPress}
                      buttonInnerColor={"#f39c12"}
                      buttonOuterColor={
                        this.state.value3Index === i ? "#2196f3" : "#000"
                      }
                      buttonSize={15}
                      buttonStyle={{}}
                      buttonWrapStyle={styles.btnWrapStyle}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      onPress={onPress}
                      labelStyle={styles.labelStyle}
                      labelWrapStyle={styles.labelWarpStyle}
                    />
                  </RadioButton>
                );
              })}
            </RadioForm>
          </View>

          <View style={styles.component}>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.welcome}>
                Bạn thích đi du lịch cùng với ai?
              </Text>
            </View>
            <RadioForm
              formHorizontal={false}
              labelHorizontal={true}
              animation={true}
            >
              {this.state.types4.map((obj, i) => {
                var onPress = (value, index) => {
                  this.setState({
                    value4: value,
                    value4Index: index
                  });
                };
                return (
                  <RadioButton labelHorizontal={true} key={i}>
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={this.state.value4Index === i}
                      onPress={onPress}
                      buttonInnerColor={"#f39c12"}
                      buttonOuterColor={
                        this.state.value4Index === i ? "#2196f3" : "#000"
                      }
                      buttonSize={15}
                      buttonStyle={{}}
                      buttonWrapStyle={styles.btnWrapStyle}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      onPress={onPress}
                      labelStyle={styles.labelStyle}
                      labelWrapStyle={styles.labelWarpStyle}
                    />
                  </RadioButton>
                );
              })}
            </RadioForm>
          </View>

          <View style={styles.component}>
            <View style={{ marginBottom: 10 }}>
              <Text style={styles.welcome}>
                Bạn thích đi du lịch tới vùng(miền) nào?
              </Text>
            </View>
            <RadioForm
              formHorizontal={false}
              labelHorizontal={true}
              animation={true}
            >
              {this.state.types5.map((obj, i) => {
                var onPress = (value, index) => {
                  this.setState({
                    value5: value,
                    value5Index: index
                  });
                };
                return (
                  <RadioButton labelHorizontal={true} key={i}>
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={this.state.value5Index === i}
                      onPress={onPress}
                      buttonInnerColor={"#f39c12"}
                      buttonOuterColor={
                        this.state.value5Index === i ? "#2196f3" : "#000"
                      }
                      buttonSize={15}
                      buttonStyle={{}}
                      buttonWrapStyle={styles.btnWrapStyle}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      onPress={onPress}
                      labelStyle={styles.labelStyle}
                      labelWrapStyle={styles.labelWarpStyle}
                    />
                  </RadioButton>
                );
              })}
            </RadioForm>
          </View>

          <View style={styles.btnContainer}>
            <Button
              block
              iconRight
              style={styles.btn}
              onPress={() => this.onPressedKq()}
            >
              <Text style={styles.textStyle}>Xem kết quả nào </Text>
              <Icon size={24} style={styles.iconStyle} name="hand-o-right" />
            </Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
    //  flex: 1,
    // backgroundColor: "rgba(51, 102, 153, 0.7)"
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FAF7F7"
  },
  questionTextStyle: {
    fontSize: 20,
    // textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 5
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  component: {
    //  alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 0.5
  },
  radioStyle: {
    borderRightWidth: 1,
    borderColor: "#2196f3",
    paddingRight: 10
  },
  radioButtonWrap: {
    marginRight: 5
  },
  btn: {
    margin: 15,
    backgroundColor:"rgb(43, 226, 104)"
  },
  textStyle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 18
  },
  btnContainer: {
    marginBottom: 20
  },
  // Radio button styles
  labelStyle: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "#2ecc71"
  },
  labelWarpStyle: {
    flex: 1,
    justifyContent: "flex-start",
    marginBottom: 10
  },
  btnWrapStyle: {
    marginLeft: 10
  }
});
