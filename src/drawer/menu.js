import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableHighlight } from "react-native";
import { Thumbnail } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
export default class menu extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Thumbnail large source={require("../../Asset/img/default.png")} />
          <Text style={styles.testStyle}> User Name</Text>
        </View>
        <View style={styles.itemContainer}>
            <Icon name='home'size={24}/>
            <TouchableHighlight onPress={()=> navigate("Register")}>
                <Text style={styles.testStyle}>Home</Text>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //backgroundColor: "gray",
    flex: 1
  },
  avatarContainer:{
      flexDirection:'row',
      borderBottomWidth: 3,
     // justifyContent:'center',
      
      alignItems:'center',
      paddingHorizontal: 5,
      marginVertical: 20

  },
  testStyle:{
    margin: 10,
    fontSize: 18,
    fontWeight: "400",
   // color:"#FFFFFF"
  },
  itemContainer:{
      flexDirection:'row',
      borderBottomWidth: 3,
      paddingHorizontal: 5,
      marginVertical: 5,
      alignItems:'center',
  }

});
