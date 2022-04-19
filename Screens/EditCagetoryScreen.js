import React, { Component } from "react";
import { TextInput, View, Text, Button, Alert } from "react-native";
import { connect } from "react-redux";
import Card from "../Navigations/Card";
import { insertCategory, updateCategory} from "../Store/actions/CagtoryAction";

class EditCagetoryScreen extends Component {
  state = {
    categoryId: "",
    name: "",
  };

  componentDidMount = () => {
    const { route, navigation, categories} = this.props
    
    const {categoryId} = route.params

    const category = categories.find(item => item.categoryId === categoryId)

    if(category){
      this.setState({...this.state,
         categoryId: "" + category.categoryId, 
         name: category.name})
    }
  }

  inputChangedHandler = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };
  updateCategoryHandler = () => {
    const {updateCategory, navigation} = this.props
    const {categoryId, name} = this.state

    updateCategory(+categoryId, name);

    navigation.navigate("ListCagetoryScreen")
    // Alert.alert("Infomation", "New Category has been inserted" , [{ text: "OK" }]);
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Card>
          <Text>Category ID</Text>
          <TextInput
            style={{ borderBottomWidth: 0.3, borderBottomColor: "gray" }}
            value={this.state.categoryId}
            onChangeText={this.inputChangedHandler.bind(this, "categoryId")}
          ></TextInput>
          <Text>Name</Text>
          <TextInput
            style={{ borderBottomWidth: 0.3, borderBottomColor: "gray" }}
            value={this.state.name}
            onChangeText={this.inputChangedHandler.bind(this, "name")}
          ></TextInput>
          <View style={{ marginTop: 12 }}>
            <Button title="Update" onPress={this.updateCategoryHandler}></Button>
          </View>
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  updateCategory: (categoryId, name) =>
    dispatch(updateCategory(categoryId, name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCagetoryScreen);
