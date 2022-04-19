import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeBlog from "./HomeBlog";
import BlogScreen from "./BlogScreen";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { login } from "../../Store/actions/authActions";

const Tab = createMaterialTopTabNavigator();
export default function TabScreen({navigation}) {
  useState;
  return (
    <View style={{ flex: 1, marginTop: 30,backgroundColor: "#23b4d2", }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 14,
          marginBottom: 14,
          marginTop: 7,
          
        }}
      >
        <TouchableOpacity  onPress={() => navigation.goBack()}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Me</Text>
        </TouchableOpacity>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 21 }}>
          Dashboard
        </Text>
        <Text style={{ color: "#23b4d2" }}>Me</Text>
      </View>
      {/* <View style = > */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#f7f7f7",
          tabBarItemStyle: {},
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold", marginTop: -4, },
          tabBarStyle: {
            backgroundColor: "#23b4d2",
            borderColor: "white",
            borderWidth: 1,
            marginHorizontal: 17,
            marginBottom: 10,
            borderRadius: 10,
            height: 40,
          },
          
        }}
        // overScrollMode = {fa}
        // tabBarPosition = {0}
        
        // showPageIndicator = {false}
      >
        <Tab.Screen
          name ="Home"
          component={BlogScreen}
          options={{ tabBarLabel: "Blog",
          // tabBarIndicator = ({status}) => console.log("aa")
           }}
        ></Tab.Screen>
        <Tab.Screen
          name="Blog"
          component={HomeBlog}
          options={{ tabBarLabel: "Follows",}}
        ></Tab.Screen>
      </Tab.Navigator>
    {/* </View> */}
    </View>
  );
}
