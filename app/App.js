/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  NativeRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-native";
import Home from "./scenes/Home/index";
import InitialPage from "./scenes/InitialPage/index";
import ShowProduto from './scenes/ShowProduto/index'

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <Router>
        <View>
          <Switch>
            <Route path="/" component={ShowProduto} />
            <Route path="/initialPage" component={InitialPage} />
            <Route path="/produto" component={ShowProduto} />

            <Redirect to="/produto" />
          </Switch>
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
