import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import isEmail from "is-email";
import { Button, Input, CheckBox } from "react-native-elements";
import sha512 from "js-sha512";
import Storage from "../util/Storage";

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      acceptedToS: false
    };
  }
  static navigationOptions = {
    header: null
  };
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
          <Text style={{ fontSize: 32, color: "#ffffff", marginBottom: 20 }}>
            Sharify
          </Text>
          <Input
            placeholder="Your name"
            placeholderTextColor={"#dddddd"}
            inputStyle={{ color: "#ffffff" }}
            value={this.state.name}
            autoCapitalize="words"
            onChangeText={text => this.setState({ name: text })}
          />
          <Input
            placeholder="E-mail address"
            placeholderTextColor={"#dddddd"}
            keyboardType="email-address"
            autoCapitalize="none"
            inputStyle={{ color: "#ffffff" }}
            value={this.state.email}
            onChangeText={text => this.setState({ email: text.toLowerCase() })}
          />
          <Input
            placeholder="Password"
            placeholderTextColor={"#dddddd"}
            inputStyle={{ color: "#ffffff" }}
            value={this.state.password}
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
          />
          <Input
            placeholder="Repeat password"
            placeholderTextColor={"#dddddd"}
            inputStyle={{ color: "#ffffff" }}
            autoCapitalize="none"
            value={this.state.password2}
            secureTextEntry={true}
            onChangeText={text => this.setState({ password2: text })}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 15,
              marginRight: 15
            }}
          >
            <CheckBox
              containerStyle={{
                paddingLeft: 0,
                paddingRight: 0,
                marginLeft: 0,
                marginRight: 5
              }}
              checked={this.state.acceptedToS}
              onPress={() =>
                this.setState({ acceptedToS: !this.state.acceptedToS })
              }
            />
            <Text
              style={{ fontSize: 12, color: "#dddddd", textAlign: "center" }}
            >
              I accept Terms of Service and sell my soul.
            </Text>
          </View>
          <Button
            title="Create an account"
            style={{ width: 150, marginTop: 20 }}
            onPress={() => {
              this.register();
            }}
          />
          <Text
            onPress={() => this.props.navigation.push("Login")}
            style={{ color: "#fff", marginTop: 10 }}
          >
            Have an account already? Sign in.
          </Text>
        </KeyboardAvoidingView>
      </View>
    );
  }

  async register() {
    if (this.state.name.length < 3)
      if (!isEmail(this.state.email)) {
        Alert.alert(
          "PiotrAdamczykException: 'Your name' field contains invalid data."
        );
        return;
      }
    if (this.state.password.length < 6) {
      Alert.alert(
        "PiotrAdamczykException: Password cannot be shorter than 6 characters."
      );
      return;
    }
    if (this.state.password !== this.state.password2) {
      Alert.alert("PiotrAdamczykException: Passwords are not identical!");
      return;
    }
    if (!this.state.acceptedToS) {
      Alert.alert("PiotrAdamczykException: You didn't accept ToS.");
      return;
    }
    try {
      const response = await fetch("http://192.168.1.100/api/v1/users/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: sha512(this.state.password).toUpperCase()
        })
      });
      const r = await response.json();
      if (r.error) {
        Alert.alert(
          "PiotrAdamczykException: An error occurred (" + r.code + ")"
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

const styles = {
  input: {}
};
