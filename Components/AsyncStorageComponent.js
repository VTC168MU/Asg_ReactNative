import React, { Component } from "react";
import { Alert, AsyncStorage, Button, TextInput, View } from "react-native";
import  AsyncStorage  from "@react-native-async-storage/async-storage";
export default class AsyncStorageComponent extends Component {
  state = {
    username: "",
  };
  inputHandler = (text) => {
    this.setState({ ...this.state, username: text });
    console.log(this.state);
  };
  saveHandler = async () => {
      try {
          const user = {
              username: this.state.username
          }
        await AsyncStorage.setItem('User', JSON.stringify(user))
          Alert.alert("Information", 'User is saved', [{Text: 'OK'}])    
      } catch (error) {   
        Alert.alert("Error", ''+error.message, [{Text: 'OK'}])    
      }
  }
  loadHandler = async () => {
    try {
        const userString = await AsyncStorage.getItem("User")
        const user = JSON.parse(userString);
        this.setState({...this.state, username: user.username})

        Alert.alert("Information", 'User is loaded', [{Text: 'OK'}])    
    } catch (error) {   
      Alert.alert("Error", ''+error.message, [{Text: 'OK'}])    
    }
}
  render() {
    return (
      <View style = {{flex: 1, marginTop: 30, justifyContent: "center", alignItems: "center"}}>
        <Text>UserName</Text>
        <TextInput style = {{borderBottomWidth: 1, borderBottomColor: #ccc, marginBottom: 7,
        marginTop: 7}}
          value={this.state.username}
          onChangeText={this.inputHandler}
        ></TextInput>
        <View style = {{marginTop: 5, marginBottom: 5}}>
            <Button title="Save" onPress={this.saveHandler}></Button>
            <Button title="Load" onPress={this.loadHandler}></Button>
        </View>
      </View>
    );
  }
}
