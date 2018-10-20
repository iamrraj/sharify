/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";
import HomeScreen from "./components/HomeScreen";

export default DrawerNavigator({
  Home: {
    screen: HomeScreen
  }
});
