'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };
  }

  componentDidMount(){
    this.interval = setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 10000);
  }

  componentWillUnmount(){
    this.interval && clearInterval(this.interval)
  }

  render() {
    let display = this.state.showText ? this.props.text : 'hidden';
    return (
      <Text>{display}</Text>
    );
  }
}