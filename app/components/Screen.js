import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet, // CSS-like styles
  Text, // Renders text
  View // Container component
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { StackNavigator } from "react-navigation";

import Swiper from "./Swiper";

export default class Screen extends Component {
  render() {
    return (
      <Swiper navigation={this.props.navigation}>
        {/* First screen */}
        <View style={styles.slide}>
          <Icon name="ios-home" {...iconStyles} />
          <Text style={styles.header}>one</Text>
          <Text style={styles.text}>one</Text>
        </View>
        {/* Second screen */}
        <View style={styles.slide}>
          <Icon name="ios-people" {...iconStyles} />
          <Text style={styles.header}>two</Text>
          <Text style={styles.text}>two</Text>
        </View>
        {/* Third screen */}
        <View style={styles.slide}>
          <Icon name="ios-videocam" {...iconStyles} />
          <Text style={styles.header}>three</Text>
          <Text style={styles.text}>three</Text>
        </View>
      </Swiper>
    );
  }
}
const iconStyles = {
  size: 100,
  color: "#FFFFFF"
};
const styles = StyleSheet.create({
  // Slide styles
  slide: {
    flex: 1, // Take up all screen
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#16a085"
  },
  // Header styles
  header: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15
  },
  // Text below header
  text: {
    color: "#FFFFFF",
    fontFamily: "Avenir",
    fontSize: 18,
    marginHorizontal: 40,
    textAlign: "center"
  }
});
AppRegistry.registerComponent("Screen", () => Screen);
