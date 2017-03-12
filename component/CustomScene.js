'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class extends Component {
  static get defaultProps() {
    return {
      title: 'CustomScene'
    };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>My name is {this.props.title}</Text>
        <TouchableOpacity onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableOpacity>
        <TouchableHighlight underlayColor="#66666666" onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View >
    )
  }
}