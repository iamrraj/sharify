import React, { Component } from "react";
import { View, SafeAreaView, KeyboardAvoidingView, Alert } from "react-native";
import { Text, Card, Button, Input } from "react-native-elements";
import sha512 from "js-sha512";
import Storage from "../util/Storage";
export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <View style={{ display: "flex", backgroundColor: "#000" }}>
        <KeyboardAvoidingView
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}
          behavior="padding"
        >
          <Text style={{ fontSize: 32, color: "#ffffff" }}>Sharify</Text>
          <Input
            placeholder="E-mail address"
            placeholderTextColor={"#dddddd"}
            keyboardType="email-address"
            autoCapitalize="none"
            inputStyle={{ color: "#ffffff" }}
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
          <Input
            placeholder="Password"
            placeholderTextColor={"#dddddd"}
            inputStyle={{ color: "#ffffff" }}
            secureTextEntry={true}
            value={this.state.password}
            autoCapitalize="none"
            onChangeText={text => this.setState({ password: text })}
          />
          <Button
            title="Sign in"
            style={{ width: 150, marginTop: 20 }}
            onPress={() => {
              this.login();
            }}
          />
          <Text
            onPress={() => this.props.navigation.pop()}
            style={{ color: "#fff", marginTop: 10 }}
          >
            Don't have an account yet? Register.
          </Text>
        </KeyboardAvoidingView>
      </View>
    );
  }
  async login() {
    try {
      const response = await fetch("http://192.168.1.100/api/v1/users/auth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: sha512(this.state.password).toUpperCase()
        })
      });
      const r = await response.json();
      if (r.error) {
        Alert.alert(
          "PiotrAdamczykException: Invalid login details (" + r.code + ")"
        );
        return;
      }
      try {
        await Storage.setSession(r.session);
        this.props.navigation.navigate("App");
      } catch (err) {
        Alert.alert(
          "PiotrAdamczykException: Could not store session in AsyncStorage"
        );
        return;
      }
    } catch (err) {
      Alert.alert("MarcelloBardusException: " + err.message);
    }
  }
}
