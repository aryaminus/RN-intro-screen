import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default class Boiler extends Component {
  render() {
    return <Text>OLA</Text>;
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent("Boiler", () => Boiler);
