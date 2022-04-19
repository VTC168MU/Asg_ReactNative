import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  ActivityIndicator,
  Image,
  ImageBackground,
} from "react-native";
import React, { Component } from "react";
import Card from "../Navigations/Card";
import { register } from "../Store/actions/authActions";
import { connect } from "react-redux";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

class RegisterScreen extends Component {
  state = {
    eyePass: false,
    email: "proit4all@gmail.com",
    password: "abc",
    error: "",
    isLoading: false,
  };
  toggleEye = () => {
    this.setState({ ...this.state, eyePass: !this.state.eyePass });
  };
  inputChangedHandler = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };
  registerHandler = async () => {
    const { navigation, register } = this.props;
    const { email, password } = this.state;

    try {
      this.setState({ ...this.state, isLoading: true });
      await register(email, password);

      this.setState({ ...this.state, isLoading: false });
      navigation.navigate("LoginScreen");
    } catch (error) {
      this.setState({
        ...this.state,
        isLoading: false,
        error: "Error" + error.message,
      });
    }
  };
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground
          source={{
            uri: "https://i.pinimg.com/originals/f5/af/38/f5af38611cd1bda1f68876a13bb6436e.jpg",
          }}
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 100,
              marginTop: 50,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 10,
              marginBottom: 12,
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LoginScreen")}
            >
              <Icon
                name="angle-left"
                size={28}
                color={"white"}
                style={{ fontWeight: "bold" }}
              ></Icon>
            </TouchableOpacity>

            <Text style={{ fontSize: 30, fontWeight: "bold", color: "#FFF" }}>
              Register
            </Text>
            <Icon name="angle-left" size={28} color={"#0093b5"}></Icon>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              margin: 12,
            }}
          >
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFF",
                marginTop: 30,
              }}
            >
              <Image
                source={{
                  uri: "https://cdn2.iconfinder.com/data/icons/user-actions-15/24/user_photo_image_account_profile_camera-512.png",
                }}
                style={{ height: 70, width: 70 }}
              ></Image>
            </View>
          </View>

          <View
            style={{ marginVertical: 5, marginTop: 5, marginHorizontal: 5 }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginHorizontal: 2,
                marginVertical: 3,
                // marginTop: 10
              }}
            >
              <View style={{ flex: 1, marginHorizontal: 3 }}>
                <Text
                  style={{ color: "#F7F7F7", fontWeight: "bold", fontSize: 12 }}
                >
                  User name
                </Text>
                <TextInput
                  style={{
                    borderRadius: 4,
                    borderWidth: 0.3,
                    padding: 7,
                    borderColor: "#FAFAFA",
                    color: "#F7F7F7",
                  }}
                ></TextInput>
              </View>

              <View style={{ flex: 1, marginHorizontal: 3 }}>
                <Text
                  style={{ color: "#F7F7F7", fontWeight: "bold", fontSize: 12 }}
                >
                  Age
                </Text>
                <TextInput
                  style={{
                    borderRadius: 4,
                    borderWidth: 0.3,
                    padding: 7,
                    borderColor: "#FAFAFA",
                    color: "#F7F7F7",
                  }}
                ></TextInput>
              </View>
            </View>
            <View style={{ marginHorizontal: 5, marginVertical: 3 }}>
              <Text
                style={{ color: "#F7F7F7", fontWeight: "bold", fontSize: 12 }}
              >
                Email
              </Text>
              <TextInput
                style={{
                  borderRadius: 4,
                  borderWidth: 0.3,
                  padding: 7,
                  color: "#F7F7F7",
                  borderColor: "#FAFAFA",
                }}
                // value={this.state.email}
                keyboardType="email-address"
                onChangeText={this.inputChangedHandler.bind(this, "email")}
              ></TextInput>
            </View>

            <View style={{ marginHorizontal: 5, marginVertical: 2 }}>
              <Text
                style={{ color: "#F7F7F7", fontWeight: "bold", fontSize: 12 }}
              >
                Password
              </Text>
              <View style={{}}>
                <TextInput
                  style={{
                    borderRadius: 4,
                    borderWidth: 0.3,
                    padding: 7,
                    color: "#F7F7F7",
                    borderColor: "#FAFAFA",
                  }}
                  // value={this.state.password}
                  secureTextEntry={this.state.eyePass ? false : true}
                  keyboardType="default"
                  onChangeText={this.inputChangedHandler.bind(this, "password")}
                ></TextInput>
                <View style = {{position: "absolute", alignSelf: "flex-end",}}>
                <TouchableOpacity
                  style={{
                    marginHorizontal: 7,
                    // backgroundColor: "#333"
                  }}
                  onPress = {this.toggleEye}
                >
                  <Icon
                    name={this.state.eyePass ? "eye" : "eye-slash"}
                    style={{ margin: 7, padding: 2 }}
                    color={"white"}
                    size={24}
                    onPress = {() => ({...this.state, eyePass: !this.state.eyePass })}
                  ></Icon>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 24,
              borderRadius: 7,
              borderWidth: 1,
              margin: 12,
              backgroundColor: "#fff",
              borderColor: "#ECECEC",
              elevation: 7,
              shadowOffset: 7,
              shadowOpacity: 7,
              shadowRadius: 5,
            }}
          >
            <View style={{ padding: 7, paddingBottom: 30 }}>
              <Text
                style={{
                  marginHorizontal: 5,
                  marginVertical: 3,
                  fontWeight: "bold",
                  color: "#0093B5",
                  fontSize: 16,
                }}
              >
                Contact Infomation
              </Text>
              <View
                style={{ marginHorizontal: 5, marginVertical: 3, marginTop: 3 }}
              >
                <TextInput
                  style={{
                    // borderRadius: 10,
                    borderBottomWidth: 1,
                    padding: 5,
                    borderColor: "#BEBEBE",
                  }}
                  placeholder={"Address 1"}
                ></TextInput>
              </View>
              <View style={{ marginHorizontal: 5, marginVertical: 3 }}>
                <TextInput
                  style={{
                    // borderRadius: 10,
                    borderBottomWidth: 1,
                    padding: 5,
                    borderColor: "#BEBEBE",
                  }}
                  placeholder={"Address 2"}
                ></TextInput>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  marginHorizontal: 2,
                  marginVertical: 3,
                }}
              >
                <View style={{ flex: 1, marginHorizontal: 4 }}>
                  <TextInput
                    style={{
                      borderBottomWidth: 1,
                      padding: 5,
                      borderColor: "#BEBEBE",
                    }}
                    placeholder={"Country"}
                  ></TextInput>
                </View>

                <View style={{ flex: 1, marginHorizontal: 4 }}>
                  <TextInput
                    style={{
                      borderBottomWidth: 1,
                      padding: 5,
                      borderColor: "#BEBEBE",
                    }}
                    placeholder={"Postal Code"}
                  ></TextInput>
                </View>
              </View>

              <View style={{ marginHorizontal: 5, marginVertical: 3 }}>
                <TextInput
                  style={{
                    borderBottomWidth: 1,
                    padding: 5,
                    borderColor: "#BEBEBE",
                  }}
                  placeholder={"State"}
                  secureTextEntry={true}
                ></TextInput>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            {this.state.isLoading ? (
              <ActivityIndicator
                size={"large"}
                color="green"
              ></ActivityIndicator>
            ) : (
              <TouchableOpacity
                onPress={this.registerHandler}
                style={{
                  backgroundColor: "#0093B5",
                  height: 45,
                  borderRadius: 14,
                  marginHorizontal: 45,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}
                >
                  Register
                </Text>
              </TouchableOpacity>
            )}
            {!!this.state.error && (
              <View>
                <Text>{this.state.error}</Text>
              </View>
            )}
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  register: (email, password) => dispatch(register(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
