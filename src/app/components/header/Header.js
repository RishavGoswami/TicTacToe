import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import style from "./styles";

class Header extends Component {
  renderScreen() {
    return (
      <View style={style.row}>
        <View style={style.row}>
          <Text style={style.title}>Player One</Text>
          <Image
            source={require("../../assets/images/circle.png")}
            style={style.icon}
          />
        </View>
        <View style={style.row}>
          <Text style={style.title}>Player Two</Text>
          <Image
            source={require("../../assets/images/cross.png")}
            style={style.icon}
          />
        </View>
      </View>
    );
  }

  render() {
    return this.renderScreen();
  }
}

export default Header;
