'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput } from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={{ padding: 5, backgroundColor: 'powderblue' }}>
        <Text style={{ padding: 5, fontSize: 30 }}>
          {this.props.title}: {this.state.text.split(' ').map((word) => word && '🍕').join(' ') }
        </Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="输入内容"
          onChangeText={(text) => this.setState({ text }) }>
        </TextInput>
      </View>
    );
  }
}