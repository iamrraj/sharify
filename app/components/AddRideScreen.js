/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class AddRideScreen extends Component {
  static navigationOptions = {
    drawerLabel: "Add ride"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Add ride</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }
});
