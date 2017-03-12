'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

export default class TouchableButton extends Component {
  _onPressButton() {
    console.log('you tap it !')
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text>Button</Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text>AlphaButton</Text>
        </TouchableOpacity>
      </View>
    );
  }
}