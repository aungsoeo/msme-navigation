import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { Entypo, FontAwesome } from "@expo/vector-icons";

export default class DrawerSideBar extends React.Component {
  navigate(routeName) {
    this.props.navigation.navigate(routeName);
  }

  render() {
    let activeIndex = this.props.navigation.state.index;
    let activeRouteName = this.props.navigation.state.routes[activeIndex]
      .routeName;
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/msme.png")} />
        </View>
        <View style={{ flex: 1, margin: 20 }}>
          <TouchableOpacity
            style={[styles.linkBtn]}
            onPress={() => this.navigate("Members")}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.rowConatiner}>
                <FontAwesome name="users" size={40} />
              </View>
              <View style={styles.rowLabel}>
                <Text
                  style={[
                    styles.linkBtnText,
                    activeRouteName == "Members" ? styles.activeColor : null
                  ]}
                >
                  MEMBERS
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.linkBtn]}
            onPress={() => this.props.navigation.navigate("DiscountShop")}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.rowConatiner}>
                <Entypo name="shop" size={40} />
              </View>
              <View style={styles.rowLabel}>
                <Text
                  style={[
                    styles.linkBtnText,
                    activeRouteName == "DiscountShop"
                      ? styles.activeColor
                      : null
                  ]}
                >
                  DISCOUNT SHOPS
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.linkBtn]}
            onPress={() => this.navigate("CEC")}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={styles.rowConatiner}>
                <FontAwesome name="users" size={40} />
              </View>
              <View style={styles.rowLabel}>
                <Text
                  style={[
                    styles.linkBtnText,
                    activeRouteName == "CEC" ? styles.activeColor : null
                  ]}
                >
                  CEC
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25
  },
  logoContainer: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  rowConatiner: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#662",
    borderBottomColor: "#885",
    borderLeftColor: "#a22",
    borderRightColor: "#3b3",
    borderWidth: 2,
    borderRadius: 40,
    margin: 10
  },
  rowLabel: {
    flex: 1,
    justifyContent: "center",
    margin: 10
  },
  linkBtn: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  activeColor: {
    color: "green"
  },

  linkBtnText: {
    color: "#000",
    fontSize: 16
  }
});
