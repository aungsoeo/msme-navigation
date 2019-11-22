import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import React from "react";
import { AntDesign } from "@expo/vector-icons";

import CEC from "../screens/drawer/CEC";
import Members from "../screens/drawer/Members";
import DiscountShop from "../screens/tabs/DiscountShop";

import DrawerSideBar from "../components/DrawerSideBar";
import BottomTabNavigator from "./BottomTabNavigator";

export default createAppContainer(
  createDrawerNavigator(
    {
      Members: {
        screen: Members,
        navigationOptions: () => ({
          drawerLabel: "MEMBERS",
          drawerIcon: ({ focused, tintColor }) => (
            <AntDesign name="home" size={20} color={tintColor} />
          )
        })
      },
      DiscountShop2: {
        screen: DiscountShop,
        navigationOptions: () => ({
          drawerLabel: "DISCOUNT SHOP",
          drawerIcon: ({ focused, tintColor }) => (
            <AntDesign name="user" size={20} color={tintColor} />
          )
        })
      },
      CEC: {
        screen: CEC,
        navigationOptions: () => ({
          drawerLabel: "EXECUTIVE COUNCIL",
          drawerIcon: ({ focused, tintColor }) => (
            <AntDesign name="setting" size={20} color={tintColor} />
          )
        })
      },
      BottomTabNavigator: { screen: BottomTabNavigator }
    },
    {
      initialRouteName: "BottomTabNavigator",
      contentComponent: DrawerSideBar,
      drawerWidth: 300
    }
  )
);
