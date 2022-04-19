import React, { Component } from 'react'
import { Button, View, Text, Alert } from 'react-native'
import * as Location from 'expo-location'
export default class LocationComponents extends Component {
    state = {
        location: null,
        error: "",
    }
    componentDidMount = () => {
        const requestPermisson = async () => { 
            let{status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted'){
             this.setState({...this.state, error: 'Permisson to access location was denied',
            })
            return
            }
            if(status === 'granted'){
                Alert.alert('Information', 'Permission has granted', [
                    {Text: "OK"}
                ])
            }
         }
         requestPermisson();
    }
    getLocationHandler = () => {}
  render() {
      let text = 'Waiting...'
      const {error, location} = this.state
    return (
      <View style = {{marginTop: 30, alignItems: 'center', justifyContent: 'center', padding: 30}}>
      <Text style = {{fontSize: 18, textAlign: 'center'}}>{text}</Text>
      {!error && <Button title='Get Location' onPress={this.getLocationHandler}></Button>}
      </View>
    )
  }
}
