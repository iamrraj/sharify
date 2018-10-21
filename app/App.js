/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  DrawerNavigator,
  StackNavigator,
  SwitchNavigator
} from "react-navigation";
import HomeScreen from "./components/HomeScreen";

const MyApp = new DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Home2: {
    screen: HomeScreen
  },
  Home3: {
    screen: HomeScreen
  }
});

const AppNavigator = new SwitchNavigator({
  App: {
    screen: MyApp
  }
});

export default AppNavigator;
