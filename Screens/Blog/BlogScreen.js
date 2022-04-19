import React, { Component } from "react";
import { Alert, Image, Text, ToastAndroid, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { deleteBlog } from "../../Store/actions/CagtoryAction";

class BlogScreen extends Component {
  deleteBlogHandler = (blogId, item) => {
    const { deleteBlog } = this.props;

    Alert.alert("Confirm", `Do you want to delete the blog ${item.item.title}?`, [
      {
        text: "Yes",
        onPress: () => {
          console.log("delete");
          if(deleteBlog(+blogId)){
          ToastAndroid.show("Delete success", ToastAndroid.SHORT)
          }else{
            console.log(deleteBlog(+blogId))
            ToastAndroid.show("Delete faild", ToastAndroid.SHORT)
          }
        },
      },
      { text: "No" },
    ]);
  };
  render() {
    const { bloges, } = this.props;
    return (
      <View style={{ backgroundColor: "#f2f2f2" }}>
        <View style={{ marginTop: 3 }}></View>
        <FlatList
          data={bloges}
          keyExtractor={(item, index) => item.blogId}
          renderItem={(item) => (
            <View style={{}}>
              <TouchableOpacity
              onLongPress={() => {this.deleteBlogHandler(item.item.blogId, item)}}
                style={{
                  borderRadius: 6,
                  borderColor: "#eeeeee",
                  borderWidth: 0.7,
                  marginHorizontal: 5,
                  marginVertical: 3,
                  backgroundColor: "#fafafa",
                  elevation: 7,
                }}
              >
                <View style={{ padding: 7 }}>
                  <Image
                    source={{ uri: item.item.image }}
                    style={{
                      height: 100,
                      resizeMode: "cover",
                      borderRadius: 4,
                    }}
                  ></Image>
                  <Text
                    style={{
                      marginVertical: 4,
                      fontSize: 17,
                      fontWeight: "bold",
                    }}
                  >
                    {item.item.title}
                  </Text>
                  <Text style={{}}>{`${item.item.status}`}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        ></FlatList>
        <View style={{ marginBottom: 3 }}></View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  bloges: state.bloges.bloges,
});

const mapDispatchToProps = (dispatch) =>({
  deleteBlog: (blogId) => dispatch(deleteBlog(blogId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogScreen);
