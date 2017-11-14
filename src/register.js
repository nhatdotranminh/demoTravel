import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/FontAwesome";

import { Button } from "native-base";
deviceScreen = Dimensions.get("window");
export default class register extends Component {
  constructor() {
    super();
    this.state = {
      emai: "",
      password: "",
      lastName: "",
      firstName: "",
      birthDay: "",
      address: "",
      male: "",
      birthDay: "",
      isDateTimePickerVisible: false
    };
  }
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.setState({
      birthDay: date
    });
    this._hideDateTimePicker();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formStyle}>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Email"
            // placeholderTextColor="black"
            value={this.state.email}
            onChangeText={value => this.setState({ email: value })}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="Password"
            // placeholderTextColor="black"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={value => this.setState({ password: value })}
          />

          <TextInput
            style={styles.textInputStyle}
            placeholder="FirstName"
            // placeholderTextColor="black"
            value={this.state.firstName}
            onChangeText={value => this.setState({ firstName: value })}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="LastName"
            // placeholderTextColor="black"
            value={this.state.lastName}
            onChangeText={value => this.setState({ lastName: value })}
          />
          <TextInput
            style={styles.textInputStyle}
            placeholder="Address"
            // placeholderTextColor="black"
            value={this.state.address}
            onChangeText={value => this.setState({ address: value })}
          />
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={{
                height: 40,
                // editable: false,
                borderColor: "gray",
                borderBottomWidth: 1,
                width: 100,
                padding: 10,
                margin: 10
              }}
              placeholder="BirthDay"
              // placeholderTextColor="black"
              value={this.state.birthDay}
            />
            <TouchableOpacity onPress={this._showDateTimePicker}>
              <Text>Date</Text>
            </TouchableOpacity>
          </View>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDateTimePicker}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button block success onPress={() => alert("Not ready")}>
            <Text style={styles.textStyle}>Confirm</Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF7F7"
  },
  formStyle: {
    flex: 1,
    margin: 10
  },
  textInputStyle: {
    height: 40,
    borderColor: "gray",
    borderBottomWidth: 1,
    width: deviceScreen.width - 20,
    padding: 10,
    margin: 10
  },
  textStyle: {
    color: "white",
    backgroundColor: "transparent",
    fontSize: 18
  },
  btnContainer: {}
});
