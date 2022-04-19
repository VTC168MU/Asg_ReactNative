import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BlogScreen from "../Screens/Blog/BlogScreen";
import EditCagetoryScreen from "../Screens/EditCagetoryScreen";
import InsertCagetoryScreen from "../Screens/InsertCagetoryScreen";
import ListCagetoryScreen from "../Screens/ListCagetoryScreen";
import Login from "../Screens/Login";
import RegisterScreen from "../Screens/RegisterScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeBlog from "../Screens/Blog/HomeBlog";
import TabScreen from "../Screens/Blog/TabScreen";
import MainScreen from "../Screens/Home/MainScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function BlogStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListCagetoryScreen"
        component={ListCagetoryScreen}
        options={{ headerLeft: null, headerStyle: { backgroundColor: "#23b4d2",}, headerTintColor: "#f7f7f7"  }}
      />
      <Stack.Screen
        name="InsertCagetoryScreen"
        component={InsertCagetoryScreen}
        options = {{headerShown: false}}
      />
      <Stack.Screen name="EditCagetoryScreen" component={EditCagetoryScreen} />
      <Stack.Screen name="TabScreen" component={TabScreen} options = {{headerShown: false}} />
      <Stack.Screen name="MainScreen" component={MainScreen} options = {{headerShown: false}} />
    </Stack.Navigator>
  );
}

function AthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={Login} options = {{headerShown: false}} />
      <Stack.Screen
        name="BlogStackNavigator"
        component={BlogStackNavigator}
        options={{ headerShown: false, }}
      />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options = {{headerShown: false}} />
    </Stack.Navigator>
  );
}

const BlogNavigation = () => {
  return (
    <NavigationContainer>
      <AthNavigator></AthNavigator>
    </NavigationContainer>
  );
};
export default BlogNavigation;
