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
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import AuthLoadingScreen from "./components/AuthLoadingScreen";

const AppDrawer = new DrawerNavigator({
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

const AuthStack = new StackNavigator(
  { Login: LoginScreen, Register: RegisterScreen },
  { initialRouteName: "Register" }
);

const Navigator = new SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppDrawer,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default Navigator;
