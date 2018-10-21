/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class ViewRidesScreen extends Component {
  static navigationOptions = {
    drawerLabel: "View rides"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>View rides</Text>
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
