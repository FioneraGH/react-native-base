'use strict';

import React, { Component, PropTypes } from 'react';
import { View, Text, ScrollView } from 'react-native';

export default class FixDimensionsBasics extends Component {
  render() {
    return (
      <View style={{ height: 100, backgroundColor: 'grey' }}>
        <View style={{ width: 5, height: 5, backgroundColor: 'powderblue' }}></View>
        <View style={{ width: 10, flex: 1, backgroundColor: 'skyblue' }}></View>
        <View style={{ width: 15, height: 15, backgroundColor: 'steelblue' }}></View>
        <ScrollView horizontal showsHorizontalScrollIndicator>
          <View style={{ height: 15, backgroundColor: 'red', flexDirection: 'row' }}>
            <View style={{ width: 100, flex: 1, backgroundColor: 'powderblue' }}></View>
            <View style={{ width: 150, flex: 1, backgroundColor: 'skyblue' }}></View>
            <View style={{ width: 200, flex: 1, backgroundColor: 'steelblue' }}></View>
          </View>
        </ScrollView>
        <View style={{ flex: 3, backgroundColor: 'green', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch' }}>
          <View style={{ height: 5, backgroundColor: 'skyblue' }}></View>
          <View style={{ width: 10, height: 10, backgroundColor: 'steelblue' }}></View>
          <View style={{ width: 15, height: 15, backgroundColor: 'powderblue' }}></View>
        </View>
      </View>
    );
  }
}