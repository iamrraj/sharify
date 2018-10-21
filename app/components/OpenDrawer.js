import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";

class OpenDrawer extends Component {
  render() {
    return (
      <SafeAreaView style={styles.buttonSAV}>
        <View style={styles.buttonOverlay}>
          <Icon
            name="menu"
            size={28}
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
export default withNavigation(OpenDrawer);
const styles = StyleSheet.create({
  buttonSAV: {
    top: 0,
    left: 0,
    position: "absolute"
  },
  buttonOverlay: {
    top: 40,
    left: 20,
    position: "absolute",
    opacity: 0.8
  }
});
