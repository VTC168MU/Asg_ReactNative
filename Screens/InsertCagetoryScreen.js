import React, { Component } from "react";
import { TextInput, View, Text, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { insertCategory } from "../Store/actions/CagtoryAction";

class InsertCagetoryScreen extends Component {
  state = {
    categoryId: "",
    name: "",
  };
  inputChangedHandler = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };
  saveCategoryHandler = () => {
    const { insertCategory, navigation } = this.props;
    const { categoryId, name } = this.state;

    insertCategory(+categoryId, name);

    navigation.navigate("ListCagetoryScreen");
    // Alert.alert("Infomation", "New Category has been inserted" , [{ text: "OK" }]);
  };
  render() {
    return (
      <View style={{ flex: 70,  }}>
        <View
          style={{
            
            flex: 7,
            alignItems: "flex-end",
            // marginVertical: 4,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#23b4d2",
            paddingBottom: 7,
            paddingHorizontal: 7,
            elevation: 7,
            // shadowOffset: 7,
            shadowRadius: 7,
          }}
        >
        <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
        <Text style={{ color: "#fff", fontWeight: "bold" }} >Cancel</Text>
        </TouchableOpacity>
          <Text style={{ fontSize: 21, color: "#fff", fontWeight: "bold" }}>
            New Post
          </Text>
          <Text style={{ color: "#23b4d2"}}>Cancel</Text>
        </View>
        <View style={{ flex: 65, backgroundColor: "#fff",marginHorizontal: 6, marginVertical: 4 }}>
          <TextInput
            style={{
              flex: 3,
              borderColor: "#D7D7D7",
              borderWidth: 0.7,
              padding: 5,
              fontWeight: "600",
              fontSize: 16,
              borderRadius: 2,
            }}
            // value={this.state.categoryId}
            placeholder={"Id"}
            onChangeText={this.inputChangedHandler.bind(this, "categoryId")}
            keyboardType = {"numeric"}
          ></TextInput>
          <View style={{ backgroundColor: "#f7f7f7", height: 2 }}></View>
          <View
            style={{
              flex: 62,
              borderColor: "#D7D7D7",
              borderWidth: 1,
              elevation: 1,
              // marginVertical: 3
            }}
          >
            <TextInput
              style={{
                padding: 7,
                position: "absolute",
                fontSize: 15,
              }}
              multiline={true}
              placeholder={"What do you have to say for yourself?"}
              onChangeText={this.inputChangedHandler.bind(this, "name")}
            ></TextInput>
          </View>
        </View>
        <View style={{ marginTop: 5, flex: 5, justifyContent: "center", alignItems: "flex-end", marginHorizontal: 7, marginBottom: 4, }}>
          <TouchableOpacity
            style={{
              height: 45,
              backgroundColor: "#23b4d2",
              width: 100,
              justifyContent:  "center",
              alignItems: "center",
              borderRadius: 2
            }}
            onPress={this.saveCategoryHandler}
          >
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  insertCategory: (categoryId, name) =>
    dispatch(insertCategory(categoryId, name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InsertCagetoryScreen);
