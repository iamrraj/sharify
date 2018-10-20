import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  Text,
  TouchableWithoutFeedback
} from "react-native";
import { Icon } from "react-native-elements";
import MapView from "react-native-maps";

export default class MercariMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    const { open } = this.state;
    return open ? this.renderMenu() : this.renderButton();
  }
  renderButton() {
    return (
      <SafeAreaView style={styles.buttonSAV}>
        <View style={styles.buttonOverlay}>
          <Icon
            name="menu"
            size={28}
            onPress={() => this.setState({ open: true })}
          />
        </View>
      </SafeAreaView>
    );
  }
  renderMenu() {
    return (
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.profile}>
            <SafeAreaView>
              <View>
                <Text style={styles.profileText}>Avatar</Text>

                <View>
                  <Text style={styles.profileText}>Mockup Mockupowski</Text>
                </View>
                <View>
                  <Text style={styles.profileText}>4.92</Text>
                  <Icon color="#ffffff" name="star" />
                </View>
              </View>
            </SafeAreaView>
          </View>
          <View style={styles.menu}>
            <SafeAreaView style={styles.menuContainer}>
              <Text style={styles.menuItem}>Twoje przejazdy</Text>
              <Text style={styles.menuItem}>Płatności i Promocje</Text>
              <Text style={styles.menuItem}>Pomoc</Text>
              <Text style={styles.menuItem}>Poleć znajomych</Text>
              <Text style={styles.menuItem}>Ustawienia</Text>
              <Text style={styles.menuItem}>Zostań partnerem</Text>
              <Text style={styles.menuItem}>Kwestie prawne</Text>
              <Text style={styles.menuItem}>v0.000.00001</Text>
              <Text style={styles.menuItem}>
                Designed in Italy. Made in Poland.
              </Text>
            </SafeAreaView>
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => this.setState({ open: false })}
        >
          <View style={styles.dismissMenu} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

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
  },
  overlay: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "row"
  },
  container: {
    width: "80%",
    height: "100%",
    backgroundColor: "#ffffff"
  },
  dismissMenu: {
    width: "20%",
    height: "100%"
  },
  profile: {
    width: "100%",
    backgroundColor: "#000000"
  },
  profileText: {
    color: "#ffffff",
    fontSize: 20
  },
  menuContainer: {
    marginLeft: 25,
    marginTop: 20
  },
  menuItem: {
    marginTop: 15,
    color: "#666",
    fontSize: 20
  }
});
