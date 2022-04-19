import React, { Component } from "react";
import { Alert, Button, Modal, ScrollView, Text, View } from "react-native";
import { Picker, PickerIOS } from "@react-native-picker/picker";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { insertBlog } from "../../Store/actions/CagtoryAction";
// import RNPickerSelect from 'react-native-picker-select';

class HomeBlog extends Component {
  state = {
    blogId: "",
    image: "",
    title: "",
    status: "",
    titile2: [],
    modelVisible: false,
  };
  inputChangedHandler = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };
  saveBlogHandler = () => {
    const { insertBlog, navigation } = this.props;
    const { blogId, image, title, status } = this.state;
    if (blogId == "" || image == "" || status == "") {
      Alert.alert("Warning", "Please enter enough information");
      this.setState({
        blogId: "",
        image: "",
        title: "",
        status: "",
      });
    } else {
      insertBlog(+blogId, image, title, status);
      this.setState({
        blogId: "",
        image: "",
        title: "",
        status: "",
      });
    }
    // navigation.navigate("Blog");
    // Alert.alert("Infomation", "New Category has been inserted" , [{ text: "OK" }]);
  };
  render() {
    const { categories } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "#ffffff",
              borderWidth: 1,
              marginVertical: 8,
              marginHorizontal: 12,
              elevation: 2,
              padding: 7,
              borderRadius: 7,
              borderColor: "#f7f7f7",
            }}
          >
            <TextInput
              style={{
                fontSize: 15,
              }}
              onChangeText={this.inputChangedHandler.bind(this, "blogId")}
              keyboardType={"numeric"}
              placeholder={"Blog id"}
              value={this.state.blogId}
            ></TextInput>
          </View>
          <View
            style={{
              backgroundColor: "#ffffff",
              borderWidth: 1,
              marginVertical: 2,
              marginHorizontal: 12,
              elevation: 2,
              padding: 7,
              borderRadius: 7,
              borderColor: "#f7f7f7",
            }}
          >
            <TextInput
              style={{
                fontSize: 15,
              }}
              onChangeText={this.inputChangedHandler.bind(this, "image")}
              keyboardType={"url"}
              placeholder={"Url image"}
              value={this.state.image}
            ></TextInput>
          </View>
          {/* 
          {categories.map((item) => (
            <View>
              <Text>{`${item.name}`}</Text>
            </View>
          ))} */}

          <View
            style={{
              backgroundColor: "#ffffff",
              borderWidth: 1,
              marginVertical: 2,
              marginHorizontal: 12,
              elevation: 2,
              // padding: ,
              height: 45,
              borderRadius: 7,
              borderColor: "#f7f7f7",
              justifyContent: "center",
              // alignItems: "center"
            }}
          >
            <Picker
              accessibilityLabel={"Please select a category..."}
              style={{ fontSize: 15, alignItems: "center", }}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ ...this.state, title: itemValue });
              }}
              // selectedValue = {this.state.title}
              selectedValue={
                this.state.title == null
                  ? categories.map((item) => ({
                      ...this.state,
                      titile2: item.title,
                    }))(this.state.title == this.state.titile2[0])
                  : this.state.title
              }
              prompt={"Please select a category"}
            >
              {categories.map((item) => (
                <Picker.Item
                  value={item.name}
                  label={item.name}
                  key={item.categoryId}
                ></Picker.Item>
              ))}
            </Picker>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "#ffffff",
              borderWidth: 1,
              marginVertical: 2,
              marginHorizontal: 12,
              elevation: 2,
              padding: 7,
              borderRadius: 7,
              borderColor: "#f7f7f7",
            }}
          >
            <TextInput
              style={{
                position: "absolute",
                fontSize: 15,
                padding: 7,
              }}
              onChangeText={this.inputChangedHandler.bind(this, "status")}
              placeholder={"Status"}
              multiline={true}
              value={this.state.status}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            marginVertical: 6,
            marginHorizontal: 12,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: 12,
              borderWidth: 1,
              borderColor: "#f7f7f7",
              backgroundColor: "#23b4d2",
              width: 100,
              borderRadius: 7,
              elevation: 2,
            }}
          >
            <TouchableOpacity onPress={this.saveBlogHandler} style={{}}>
              <Text style={{ color: "#f7f7f7", fontWeight: "bold" }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  insertBlog: (blogId, image, title, status) =>
    dispatch(insertBlog(blogId, image, title, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeBlog);
