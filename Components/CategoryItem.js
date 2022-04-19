import { Text, View, TouchableOpacity, Image } from "react-native";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default class CategoryItem extends Component {
  render() {
    const { name, categoryId, lastname, desc} = this.props;
    return (

      <View style = {{flex: 1, backgroundColor: "#BEBEBE"}}>
        <TouchableOpacity
          style={{
            margin: 3,
            backgroundColor: "#FFF",
            borderRadius: 5,
            marginHorizontal: 7,
            elevation: 7,
            // shadowColor: '#5B5B5B',
            shadowOpacity: 10,
            shadowOffset: 5,
            shadowRadius: 5
          }}
          onLongPress = {()=> this.props.onDeletePress(categoryId, name) }
        >
          <View style={{  marginHorizontal: 10 }}>
            <Text
              style={{
                fontSize: 19,
                fontWeight: "700",
                color: "#5B5B5B"
              }}
            >
              {name}
            </Text>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ color: "#5B5B5B", fontWeight: "700" }}>
                {lastname}
              </Text>
              <Text
                numberOfLines={1}
                style={{ fontSize: 12, color: "#7B7b7B",marginRight: 14 }}
              >
                {desc}
              </Text>
            </View>
          </View>

          <View
            style={{
              position: "absolute",
              justifyContent: "flex-end",
              alignSelf: "flex-end"
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 7 }}>
              <TouchableOpacity
                style={{ marginHorizontal: 7 }}
                onPress={() => {
                  this.props.onEditPress(categoryId);
                }}
              >
                <Icon name="clipboard" size={20}></Icon>
              </TouchableOpacity>
              {/* <TouchableOpacity
                style={{ marginHorizontal: 7 }}
                onPress={() => {
                  this.props.onDeletePress(categoryId, name);
                }}
              >
                <Icon name="trash" size={25} color={"red"}></Icon>
              </TouchableOpacity> */}
            </View>
          </View>
        </TouchableOpacity>
        {/* <View style = {{backgroundColor: "#aaaa", height: 1, marginVertical: 14, marginHorizontal: 7}}></View> */}
      </View>
    );
  }
}
