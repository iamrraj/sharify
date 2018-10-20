/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MercariMapView from "./components/MercariMapView";
import MenuOverlay from "./components/MenuOverlay";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MercariMapView />
        <MenuOverlay />
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
