import React, { Component } from 'react'
import { View } from 'react-native'

export default class Card extends Component {
  render() {
    return (
      <View {...this.props} style={{
        padding: 15,
        borderRadius: 10,
        shadowColor: "#333",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        shadowOpacity: 0.2,
        backgroundColor: "white",
      }}>{this.props.children}</View>
    )
  }
}
