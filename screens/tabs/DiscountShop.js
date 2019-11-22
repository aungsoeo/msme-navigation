import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { Entypo, FontAwesome } from "@expo/vector-icons";

export default class DiscountShop extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../../assets/msme.png")} />
        </View>
        <View style={{ flex: 1, margin: 20 }}>
          <TouchableOpacity
            style={[styles.linkBtn]}
            onPress={() => this.props.navigation.navigate("Members")}
          >
            <View style={styles.rowContainer}>
              <View style={styles.iconConatiner}>
                <FontAwesome name="users" size={40} />
              </View>
              <View style={styles.rowLabel}>
                <Text style={[styles.linkBtnText]}>MEMBERS</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.linkBtn]}
            onPress={() => this.props.navigation.navigate("DiscountShop")}
          >
            <View style={styles.rowContainer}>
              <View style={styles.iconConatiner}>
                <Entypo name="shop" size={40} />
              </View>
              <View style={styles.rowLabel}>
                <Text style={[styles.linkBtnText]}>DISCOUNT SHOPS</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.linkBtn]}
            onPress={() => this.props.navigation.navigate("CEC")}
          >
            <View style={styles.rowContainer}>
              <View style={styles.iconConatiner}>
                <FontAwesome name="users" size={40} />
              </View>
              <View style={styles.rowLabel}>
                <Text style={[styles.linkBtnText]}>EXECUTIVE COUNCIL</Text>
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
    paddingTop: 50
  },
  logoContainer: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row"
  },
  iconConatiner: {
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
    marginBottom: 40
  },
  activeColor: {
    color: "green"
  },

  linkBtnText: {
    color: "#000",
    fontSize: 16
  }
});
