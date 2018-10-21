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
import AddRideScreen from "./components/AddRideScreen";
import ViewRidesScreen from "./components/ViewRidesScreen";

const MyApp = new DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  AddRide: {
    screen: AddRideScreen
  },
  ViewRides: {
    screen: ViewRidesScreen
  }
});

const AppNavigator = new SwitchNavigator({
  App: {
    screen: MyApp
  }
});

export default AppNavigator;
