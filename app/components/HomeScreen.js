/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import MercariMapView from "./MercariMapView";
import OpenDrawer from "./OpenDrawer";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MercariMapView />
        <OpenDrawer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  }
});
