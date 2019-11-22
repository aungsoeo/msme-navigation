import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import React from "react";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";

import About from "../screens/tabs/About";
import DiscountShop from "../screens/tabs/DiscountShop";
import News from "../screens/tabs/News";
import Setting from "../screens/tabs/Setting";

// import DrawerNavigator from './DrawerNavigator';

export default createAppContainer(
  createBottomTabNavigator(
    {
      DiscountShop: {
        screen: DiscountShop,
        navigationOptions: () => ({
          tabBarLabel: "Discount Shops",
          tabBarIcon: ({ focused, tintColor }) => (
            <Entypo name="shop" size={32} color={tintColor} />
          )
        })
      },
      About: {
        screen: About,
        navigationOptions: () => ({
          tabBarLabel: "About US",
          tabBarIcon: ({ focused, tintColor }) => (
            <Feather name="info" size={32} color={tintColor} />
          )
        })
      },
      News: {
        screen: News,
        navigationOptions: () => ({
          tabBarLabel: "News",
          tabBarIcon: ({ focused, tintColor }) => (
            <Entypo name="news" size={32} color={tintColor} />
          )
        })
      },
      Setting: {
        screen: Setting,
        navigationOptions: () => ({
          tabBarLabel: "Setting",
          tabBarIcon: ({ focused, tintColor }) => (
            <FontAwesome name="gears" size={32} color={tintColor} />
          )
        })
      }
      // DrawerNavigator: { screen: DrawerNavigator}
    },
    {
      initialRouteName: "DiscountShop",
      tabBarOptions: {
        activeTintColor: "green",
        inactiveTintColor: "black",
        labelStyle: {
          fontSize: 13
        },
        tabStyle: {
          paddingVertical: 20
        },
        style: {
          height: 90
        }
      }
    }
  )
);
