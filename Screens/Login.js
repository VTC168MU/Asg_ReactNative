import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  Image,
  ImageBackground,
  Switch,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import Card from "../Navigations/Card";
import { login } from "../Store/actions/authActions";

class Login extends Component {
  state = {
    email: "proit4all@gmail.com",
    password: "abc",
    error: "",
    isLoading: false,
    isEnable: false,
  };
  inputChangedHandler = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };
  gotoRegisterHandler = () => {
    const { navigation } = this.props;

    navigation.navigate("RegisterScreen");
  };
  loginHandler = async () => {
    const { navigation, login } = this.props;
    const { email, password } = this.state;

    try {
      this.setState({ ...this.state, isLoading: true });
      await login(email, password);

      if (this.props.loginedEmail) {
        this.setState({ ...this.state, isLoading: false, error: "" });
        navigation.navigate("BlogStackNavigator");
        return;
      }else{
      this.setState({
        ...this.state,
        isLoading: false,
        error: "Invalid user name or password",
      })};
    } catch (error) {
      this.setState({
        ...this.state,
        isLoading: false,
        error: "",
      });
    }
  };
  toggleSwitch = () => {
    this.setState({ ...this.state, isEnable: !this.state.isEnable });
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/originals/f5/af/38/f5af38611cd1bda1f68876a13bb6436e.jpg",
          }}
          style={{
            flex: 100,
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 45,
              flex: 35,
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold", color: "#FFF" }}>
              WELCOME
            </Text>
          </View>

          <View style={{ flex: 70 }}>
            <View style={{ marginTop: -60, flex: 60 }}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginVertical: 20,
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    height: 60,
                    width: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#FFF",
                  }}
                >
                  <Icon
                    style={{}}
                    name="user"
                    size={40}
                    color={"#0093B5"}
                  ></Icon>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 47,
                  paddingHorizontal: 30,
                  borderColor: "#FFF",
                  borderWidth: 1,
                  borderRadius: 10,
                  marginHorizontal: 45,
                }}
              >
                <Icon
                  name="envelope"
                  style={{ position: "absolute", marginHorizontal: 7 }}
                  size={18}
                  color={"#00467F"}
                ></Icon>
                <TextInput
                  style={{
                    flex: 1,
                    fontSize: 16,
                    marginHorizontal: 6,
                    color: "#FFF",
                  }}
                  // value={this.state.email}
                  placeholderTextColor="#FFF"
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={this.inputChangedHandler.bind(this, "email")}
                ></TextInput>
              </View>

              <View style = {{marginHorizontal: 43, marginVertical: -10}}>
              <Switch
                trackColor={{ false: "#767577", true: "#23b4d2" }}
                thumbColor={this.state.isEnable ? "#00467F" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={this.toggleSwitch}
                value={this.state.isEnable}
              />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: 47,
                  paddingHorizontal: 30,
                  borderColor: "#FFF",
                  borderWidth: 1,
                  borderRadius: 10,
                  marginHorizontal: 45,
                }}
              >
                <Icon
                  name="lock"
                  style={{ position: "absolute", marginHorizontal: 7 }}
                  size={24}
                  color={"#00467F"}
                ></Icon>
                <TextInput
                  style={{
                    flex: 1,
                    fontSize: 16,
                    marginHorizontal: 6,
                    color: "#FFF",
                  }}
                  placeholderTextColor="#FFF"
                  placeholder={"Password"}
                  secureTextEntry={this.state.isEnable ? false : true}
                  keyboardType="default"
                  onChangeText={this.inputChangedHandler.bind(this, "password")}
                ></TextInput>
              </View>

              <TouchableOpacity style ={{marginHorizontal: 50, alignItems: "flex-end", justifyContent: "center", marginTop: 7}}>
                <Text style = {{color: "#FFF"}}> Forgot password?</Text>
              </TouchableOpacity>

              {!!this.state.error && (
                <View style={{ marginHorizontal: 45 }}>
                  <Text style={{ color: "#DD5145", fontWeight: "bold" }}>
                    {this.state.error}
                  </Text>
                </View>
              )}

              <View style={{ marginTop: 10, marginBottom: 10 }}>
                {this.state.isLoading ? (
                  <ActivityIndicator
                    size={"large"}
                    color="green"
                  ></ActivityIndicator>
                ) : (
                  <TouchableOpacity
                    onPress={this.loginHandler}
                    style={{
                      backgroundColor: "#FFF",
                      height: 45,
                      borderRadius: 14,
                      marginHorizontal: 45,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#0093B5",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      Login
                    </Text>
                  </TouchableOpacity>
                )}
                <View style={{ marginTop: 10 }}></View>
              </View>
            </View>
          </View>

          <View style={{ flex: 15, justifyContent: "space-around" }}>
            <TouchableOpacity
              onPress={this.gotoRegisterHandler}
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  color: "#00467F",
                  fontWeight: "700",
                  fontSize: 12,
                }}
              >
                {`Register new account`.toUpperCase()}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                marginHorizontal: 20,
              }}
            >
              <TouchableOpacity>
                <Icon name="facebook-square" size={25} color="#37539B"></Icon>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="instagram" size={25} color="#BD4739"></Icon>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="twitter-square" size={25} color="#52A6E6"></Icon>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="linkedin" size={25} color="#0f78ae"></Icon>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loginedEmail: state.auths.loginedEmail,
});

const mapDispatchToProps = (dispatch) => ({
  login: async (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
