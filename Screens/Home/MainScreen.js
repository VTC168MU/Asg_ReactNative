import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Setting from "./Setting";
import Message from "./Message";
import Search from "./Search";
import MyNetwork from "./Post";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import Post from "./Post";

const Tab = createBottomTabNavigator();
const CustomTabBarButtom = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: "#b0202f",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
export default function MainScreen() {
  return (
    // <View style = {{marginTop: 30}}>
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 16,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
        // headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/originals/e1/19/77/e1197754a44d9407e4cdbf4678ae3487.png",
                }}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              ></Image>
              <Text style={{ color: focused ? "#e32f45" : "#748c94", fontWeight: focused ? "bold" : "normal"  }}>
                HOME
              </Text>
            </View>
          ),
          headerTintColor: "#f7f7f7",
          // tabBarBackground: "#23b4d2",
          headerStyle: {
            backgroundColor: "#23b4d2"
          },
          headerRight: () => (
            <TouchableOpacity>
              <Image
                source={{
                  uri: "https://icon-library.com/images/grid-small-512.png",
                }}
                style={{ height: 25, width: 25, marginHorizontal: 15, tintColor: "#f7f7f7" }}
              ></Image>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://icon-library.com/images/icon-message/icon-message-22.jpg",
                }}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              ></Image>
              <Text style={{ color: focused ? "#e32f45" : "#748c94", fontWeight: focused ? "bold" : "normal" }}>
                MESSAGE
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              resizeMode="contain"
              source={{
                uri: "https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/plus-512.png",
              }}
              style={{ width: 40, height: 40, tintColor: "#fff" }}
            ></Image>
          ),
          tabBarButton: (props) => <CustomTabBarButtom {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/768px-Search_Icon.svg.png",
                }}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              ></Image>
              <Text style={{ color: focused ? "#e32f45" : "#748c94", fontWeight: focused ? "bold" : "normal"  }}>
                SEARCH
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/640px-Windows_Settings_app_icon.png",
                }}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              ></Image>
              <Text style={{ color: focused ? "#e32f45" : "#748c94", fontWeight: focused ? "bold" : "normal" }}>
                SETTING
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
    // </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
