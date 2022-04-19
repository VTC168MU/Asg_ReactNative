import React, { Component } from "react";
import { View, Text, Button, Alert, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import CategoryItem from "../Components/CategoryItem";
import { first } from "../Constants/data";
import { deleteCategory } from "../Store/actions/CagtoryAction";
import { FloatingAction } from "react-native-floating-action";

class ListCagetoryScreen extends Component {
  actions = [
    {
      text: "Insert",
      icon: {
        uri: "https://icons-for-free.com/iconfiles/png/512/edit+document+edit+file+edited+editing+icon-1320191040211803620.png",
      },
      name: "bt_edit",
      position: 2,
      color: "#3790c8",
    },
    {
      text: "Language",
      icon: {
        uri: "https://icons-for-free.com/iconfiles/png/512/language-1324760528959493996.png",
      },
      name: "bt_language",
      position: 3,
      color: "#3790c8",
    },
    {
      text: "Home",
      icon: {
        uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png",
      },
      name: "bt_home",
      position: 1,
      color: "#3790c8",
    },
    {
      text: "Blog",
      icon: {
        uri: "https://secure.webtoolhub.com/static/resources/icons/set12/67a6bfe51c07.png",
      },
      name: "bt_blog",
      position: 4,
      color: "#3790c8",
    },
  ];
  goBack = () => {
    const { navigation } = this.props;
    navigation.navigate("InsertCagetoryScreen");
  };
  editCategoryHandler = (categoryId) => {
    const { navigation } = this.props;

    navigation.navigate("EditCagetoryScreen", { categoryId: categoryId });
  };
  deleteCategoryHandler = (categoryId, name) => {
    const { deleteCategory } = this.props;

    Alert.alert("Confirmation", `Do you want to delete the category ${name}?`, [
      {
        text: "Yes",
        onPress: () => {
          console.log("delete");
          deleteCategory(+categoryId);
        },
      },
      { text: "No" },
    ]);
  };
  render() {
    const { categories } = this.props;

    return (
      <View style={{ flex: 1 }}>
      <View style = {{}}>
        <FlatList
          style={{ }}
          horizontal
          data={first}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 1 }}>
              <Image
                style={{ height: 34, width: 34 }}
                source={{ uri: item.url }}
              ></Image>
            </View>
          )}
        ></FlatList>
        </View>
        <View style = {{flex: 1,}}>
        <FlatList
          // numColumns={2}
          data={categories}
          keyExtractor={(item, index) => item.categoryId}
          renderItem={(itemData) => (
            <CategoryItem
              onEditPress={this.editCategoryHandler}
              onDeletePress={this.deleteCategoryHandler}
              categoryId={itemData.item.categoryId}
              name={itemData.item.name}
              lastname={itemData.item.lastname}
              desc={itemData.item.desc}
            ></CategoryItem>
          )}
        ></FlatList>
        </View>
        <FloatingAction
          color="#23b4d2"
          actions={this.actions}
          onPressItem={(name) => {
            name == "bt_edit"
              ? this.props.navigation.navigate("InsertCagetoryScreen")
              : console.log(`${name}`),
            name == "bt_blog"
              ? this.props.navigation.navigate("TabScreen")
              : console.log(`${name}`),
            name == "bt_home"
              ? this.props.navigation.navigate("MainScreen")
              : console.log(`${name}`);  
          }}
          buttonSize={60}
          iconHeight={25}
          iconWidth={25}
        ></FloatingAction>
        {/* <FloatingAction></FloatingAction> */}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCategory: (categoryId) => dispatch(deleteCategory(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCagetoryScreen);
