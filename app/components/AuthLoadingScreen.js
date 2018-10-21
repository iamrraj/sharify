import React, { Component } from "react";
import { View, Text } from "react-native";
import Storage from "../util/Storage";

export default class LoginScreen extends Component {
  componentDidMount() {
    this._checkSession();
  }
  async _checkSession() {
    const session = await Storage.getSession();
    if (session === null) {
      this.props.navigation.navigate("Auth");
      return;
    }
    const response = await fetch("http://192.168.1.100/api/v1/users/identify", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        session
      })
    });
    const r = await response.json();
    if (!r.error) {
      this.props.navigation.navigate("App");
      return;
    } else {
      this.props.navigation.navigate("Auth");
      return;
    }
  }
  render() {
    return (
      <View style={{ display: "flex", backgroundColor: "#000" }}>
        <Text style={{ fontSize: 32, color: "#ffffff" }}>Sharify</Text>
      </View>
    );
  }
}
